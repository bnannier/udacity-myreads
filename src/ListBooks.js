import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Bobby's Book Shelf</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf status="Currently Reading"/>
                        <BookShelf status="Want to Read"/>
                        <BookShelf status="Read"/>
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
