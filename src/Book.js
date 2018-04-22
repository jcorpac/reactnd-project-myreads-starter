import React from 'react'
import PropTypes from 'prop-types'

function mergeAuthors(authorList) {
  if(!authorList || authorList.length === 0) {return '';}
  else {return authorList.join(', ')}
}

function handleThumbnail(imageLinks) {
  if(!imageLinks) {return 'http://via.placeholder.com/128x193.png?text=No+Cover+Available'}
  else {return imageLinks.thumbnail;}
}

function Book ( {book, changeShelfFunc} ) {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${handleThumbnail(book.imageLinks)})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(event) => (changeShelfFunc(book, event.target.value))}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{mergeAuthors(book.authors)}</div>
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
