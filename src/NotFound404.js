import React from 'react'
import { Link } from 'react-router-dom'

function NotFound404() {
  return (
    <div className="404Page">
      <h1>Thank you Mario! But our Princess is in another castle!</h1>
      <h3>Sorry, the page that you&#39;re looking for is no longer in service. Please click <Link to='/' className='goHome'>here</Link> to go to the main page.</h3>
    </div>
  )
}

export default NotFound404;
