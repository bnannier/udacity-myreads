import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from "./Book";
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        query: '',
        searchedBooks: []
    }


    /**
     * @description Handle changes made to the search bar.
     * @param {Object} The triggered event
     */
    handleChange = (e) => {
        e.preventDefault();
        this.setState({query: e.target.value});
        (e.target.value !== undefined && e.target.value.length > 0) ? this.onSearchChange(e.target.value) : this.clearSearch()
    };


    /**
     * @description Clear search.
     */
    clearSearch = () => {
        this.setState({searchedBooks: []});
    };


    /**
     * @description Actively query the api as each character is changed in the search bar.
     * @param {string} The query parameters
     */
    onSearchChange(query) {
        BooksAPI.search(query, 50).then(searchedBooks => {
            this.setState({searchedBooks})
        })
    }


    /**
     * @description Render the search bar and search results.
     */
    render() {
        const {searchedBooks, query} = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query}
                               onChange={this.handleChange}/>
                    </div>
                </div>
                {this.BookList(searchedBooks)}
            </div>
        )

    }


    /**
     * @description Render the list of books returned by search results.
     * @param {Object[]} A list of searched books
     */
    BookList(searchedBooks) {
        if (searchedBooks !== undefined && searchedBooks.length > 0) {
            return (
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks.map((book) => (
                            <Book key={book.id} book={this.checkBookShelf(book)} updateBook={this.props.updateBook}/>
                        ))}
                    </ol>
                </div>
            )
        } else {
            return null;
        }
    }


    /**
     * @description Check existing book shelf to see if the book being passed in is already present on the book shelf and change shelf status accordingly.
     * @param {Object} The book that should be checked
     */
    checkBookShelf(book) {
        let {shelfBooks} = this.props;
        let foundbook = shelfBooks[shelfBooks.findIndex(i => i.id === book.id)];

        if (foundbook === undefined) {
            book.shelf = "none"
            return book;
        } else {
            return foundbook;
        }
    }
}

export default SearchBooks
