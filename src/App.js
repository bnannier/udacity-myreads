import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

import './App.css'

/**
 * @description Allow a user to move books around from one shelf to another or add new book(s) to the shelf.
 */
class BooksApp extends React.Component {
    state = {
        shelfBooks: [],
    }


    /**
     * @description componentDidMount() is invoked immediately after a component is mounted.
     */
    componentDidMount() {
        this.loadAllBooks();
    }


    /**
     * @description Load book shelf with previously chosen books.
     */
    loadAllBooks = () => {
        BooksAPI.getAll().then((shelfBooks) => {
            this.setState({shelfBooks});
        });
    };


    /**
     * @description Update the book shelf with a chosen book.
     * @param {Object} book - The book being assigned to a shelf
     * @param {string} shelf - The shelf the book should be assigned to
     */
    updateBook = (book, shelf) => {
        // Retrieve all the books on the shelf
        let books = this.state.shelfBooks;

        // Check and see if you can find the selected book on the shelf with the existing books
        let foundBook = books[books.findIndex(i => i.id === book.id)];

        // If the book is found on the shelf, update books shelf status
        if (foundBook !== undefined) {
            books[books.findIndex(i => i.id === book.id)].shelf = shelf;
        }
        else { // Else book is being newly added to the shelf
            books.push(book);
        }

        // Update database with the updated book shelf
        BooksAPI.update(book, shelf).then(book => {
            this.setState(state => ({
                shelfBooks: books
            }))
        })
    };


    /**
     * @description Render view based on the route.
     */
    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks shelfBooks={this.state.shelfBooks} updateBook={this.updateBook}/>
                )}/>
                <Route path='/search' render={({history}) => (
                    <SearchBooks shelfBooks={this.state.shelfBooks} updateBook={this.updateBook}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
