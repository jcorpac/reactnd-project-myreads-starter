import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function MainPage( {books, changeShelfFunc} ) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            books={books.filter((book) => ( book.shelf === 'currentlyReading' ))}
            changeShelfFunc={changeShelfFunc}
          />
          <BookShelf
            title={"Want to Read"}
            books={books.filter((book) => ( book.shelf === 'wantToRead' ))}
            changeShelfFunc={changeShelfFunc}
          />
          <BookShelf
            title={"Read"}
            books={books.filter((book) => ( book.shelf === 'read' ))}
            changeShelfFunc={changeShelfFunc}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search' className='search-books'>Add a book</Link>
      </div>
    </div>
  )
}

MainPage.PropTypes = {
  // Book requires a title, an author, and a link to a thumbnail
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  changeShelfFunc: PropTypes.func.isRequired
}

export default MainPage
