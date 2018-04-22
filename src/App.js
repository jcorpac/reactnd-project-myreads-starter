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
    });
  }

  // Like findIndex, but for bookIds!
  // Compares book id to books in this.state.books. Returns -1 if the book is not found
  findBookIndex(book) {
    const bookList = this.state.books;
    for(var i = 0; i < bookList.length; i++ ) {
      if(book.id === bookList[i].id) {
        return i;
      }
    }
    return -1;
  }

  addBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((state) => {
      let bookList = this.state.books;
      let bookIndex = this.findBookIndex(book);
      if (bookIndex === -1) {
        // If the book isn't in the list, then append it to the end and change bookIndex to the end of the array.
        bookIndex = bookList.length;
        bookList.push(book);
      }
      // Set the shelf for the indexed book to the proper value.
      bookList[bookIndex].shelf = shelf;
      this.setState({books: bookList});
    })
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
