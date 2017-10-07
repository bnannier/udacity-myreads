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
        })
    }

    render() {
        let shelfBooks = this.state.shelfBooks;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Bobby's Book Shelf</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            shelfBooks={shelfBooks.filter((books) => RegExp("currentlyReading").test(books.shelf))}
                            shelName="Currently Reading"/>
                        <BookShelf shelfBooks={shelfBooks.filter((books) => RegExp("wantToRead").test(books.shelf))}
                                   shelName="Want to Read"/>
                        <BookShelf shelfBooks={shelfBooks.filter((books) => RegExp("read").test(books.shelf))}
                                   shelName="Read"/>
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
