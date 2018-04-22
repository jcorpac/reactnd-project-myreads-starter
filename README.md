# MyReads Project

* [Project Attribution](#attribution)
* [Installation](#installation)
* [Important](#important)

## Project Attribution

This project is an extension of a [starter project](https://github.com/udacity/reactnd-project-myreads-starter) provided by Udacity, as part of their Front End Web Developer and React NanoDegree programs. The starter project provided a static copy of a book tracking application running on a React framework. As a student, I was required to create a working application on the React Framework. I used the provided BooksAPI to populate the page and provided functionality to move books between shelves, display books provided by a search function, and add those books to the main application's shelves.

Source code for this project is available at `https://github.com/jcorpac/reactnd-project-myreads-starter`

## Installation

This application requires that a copy of Node.JS and the Node Package Manager (npm) be installed on the computer that it is running on. To install the application, from the console, use `git clone https://github.com/jcorpac/reactnd-project-myreads-starter.git` to create a copy of the application on your server, then use `cd reactnd-project-myreads-starter` to enter the project directory. Once in the project directory, run `npm install` to download the required Node.js modules.

Once the Node modules are installed, you can start the server by running `npm start` from the project directory. The application will be available on that machine, at port 3000. If you have a web browser on the machine, then a start program will automatically open a browser to `http://localhost:3000` and display the application.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
