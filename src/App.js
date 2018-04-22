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
    this.updateBooksFromAPI();
  }

  updateBooksFromAPI() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }

  addBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(this.updateBooksFromAPI())
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={()=> (
          <MainPage
            books={books}
            changeShelfFunc={this.addBookToShelf}
          />
        )} />
        <Route path='/search' render={()=> (
          <SearchPage
            changeShelfFunc={this.addBookToShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
