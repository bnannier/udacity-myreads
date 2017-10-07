import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from "./Book";
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({query: e.target.value})
        if (e.target.value !== undefined && e.target.value.length > 0) {
            this.onSearchChange(e.target.value)
        }else{
            this.clearSearch()
        }
    }

    clearSearch = () => {
        this.setState({searchedBooks: []})
    }

    onSearchChange(query) {
        BooksAPI.search(query, 50).then(searchedBooks => {
            this.setState({searchedBooks})
        })
        console.log(this.state.searchedBooks)
    }

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

    BookList(searchedBooks) {
        if (searchedBooks !== undefined && searchedBooks.length > 0) {
            return (
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks.map((book) => (
                            <Book key={book.id} book={book}/>
                        ))}
                    </ol>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default SearchBooks
