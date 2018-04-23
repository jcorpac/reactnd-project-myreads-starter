import React from 'react'
import PropTypes from 'prop-types'

function handleThumbnail(imageLinks) {
  if(!imageLinks || !imageLinks.thumbnail) {return 'http://via.placeholder.com/128x193.png?text=No+Cover+Available'}
  else {return imageLinks.thumbnail;}
}

function Book ( {book, changeShelfFunc} ) {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${handleThumbnail(book.imageLinks)})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => {changeShelfFunc(book, event.target.value)}}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : '' }</div>
      </div>
    </li>
  )
}

Book.PropTypes = {
  // Book requires a title, an author, and a link to a thumbnail
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    imageLinks: PropTypes.object
  }).isRequired,
  changeShelfFunc: PropTypes.func.isRequired
}

export default Book;
