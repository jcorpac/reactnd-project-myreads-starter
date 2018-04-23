import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {

  static PropTypes = {
    changeShelfFunc: PropTypes.func.isRequired
  };

  state = {
    searchResults: []
  }

  handleSearch = (event) => {
    let searchTerm = event.target.value;
    let myBooks = this.props.myBooks;
    if(searchTerm === '') {
      this.setState({searchResults: []})
    } else {
      BooksAPI.search(searchTerm).then((results) => {
        if(!results.error) {
          for(let i = 0; i < results.length; i++) {
            for(let j = 0; j < myBooks.length; j++){
              if(myBooks[j].id === results[i].id) {
                results[i].shelf = myBooks[j].shelf;
              }
            }
          }
          this.setState({searchResults: results})
        } else {
          this.setState({searchResults: []})
        }
      })
    }
  }

  render() {
    let { changeShelfFunc } = this.props;
    let { searchResults } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleSearch(event)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { searchResults.map((book)=> ( <Book book={book} key={book.id} changeShelfFunc={changeShelfFunc}/> ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchPage
