import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

import './App.css'

class BooksApp extends React.Component {
    state = {
        shelfBooks: [],
    }

    componentDidMount() {
        this.loadAllBooks();
    }

    // Load book shelf
    loadAllBooks = () => {
        BooksAPI.getAll().then((shelfBooks) => {
            this.setState({shelfBooks});
        });
    }

    // Update book shelf
    updateBook = (book, shelf) => {
        // Get all the books on the shelf
        let books = this.state.shelfBooks;

        // Check and see if you can find the book on the shelf
        let foundBook = books[books.findIndex(i => i.id === book.id)];

        // If the book is found on the shelf, update shelf status
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
    }

    // Render view based on the route
    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks shelfBooks={this.state.shelfBooks} updateBook={this.updateBook} />
                )}/>
                <Route path='/search' render={({history}) => (
                    <SearchBooks shelfBooks={this.state.shelfBooks} updateBook={this.updateBook} />
                )}/>
            </div>
        )
    }
}

export default BooksApp
