import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    state = {
        shelfBooks: [],
    }

    componentDidMount() {
        BooksAPI.getAll().then((shelfBooks) => {
            this.setState({shelfBooks});
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Bobby's Shelf</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfBooks={this.state.shelfBooks} shelfName="Currently Reading" shelfType="currentlyReading" />
                        <BookShelf shelfBooks={this.state.shelfBooks} shelfName="Want To Read" shelfType="wantToRead" />
                        <BookShelf shelfBooks={this.state.shelfBooks} shelfName="Read" shelfType="read" />
                    </div>
                </div>
                <div className="open-search">
                    <Link className='close-create-contact' to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
