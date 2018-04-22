import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

function BookShelf ( {title, books, changeShelfFunc} ) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.map((book)=> ( <Book book={book} key={book.id} changeShelfFunc={changeShelfFunc}/> ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.PropTypes = {
  // Bookshelf requires a title, but can be empty of books
  // Books must have a shape that is compatible with the Book element
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  ),
  changeShelfFunc: PropTypes.func.isRequired
};

export default BookShelf;
