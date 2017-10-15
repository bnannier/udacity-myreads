import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    // Render the book shelf in question
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.shelfBooks.filter((books) => RegExp(this.props.shelfType).test(books.shelf)).map((book) => (
                            <Book key={book.id} book={book} updateBook={this.props.updateBook} location="shelf"/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
