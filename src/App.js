import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (book, newShelf) => {
    this.setState(() => {
      this.state.books.forEach((shelfBook) => {
        if(shelfBook.id === book.id){
          BooksAPI.update(shelfBook, newShelf).then(
            shelfBook.shelf = newShelf
          );
        }
      })
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={()=> (
          <MainPage
            books={books}
            changeShelfFunc={this.changeShelf}
          />
        )} />
        <Route path='/search' render={()=> (
          <SearchPage
            changeShelfFunc={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
