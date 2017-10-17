import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

/**
 * @description List all the books on the shelf(s).
 */
class ListBooks extends Component {
    /**
     * @description Render the three different types of shelf and navigation button to search.
     */
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Bobby's Shelf</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfBooks={this.props.shelfBooks}
                                   updateBook={this.props.updateBook}
                                   shelfName="Currently Reading"
                                   shelfType="currentlyReading"/>
                        <BookShelf shelfBooks={this.props.shelfBooks}
                                   updateBook={this.props.updateBook}
                                   shelfName="Want To Read"
                                   shelfType="wantToRead"/>
                        <BookShelf shelfBooks={this.props.shelfBooks}
                                   updateBook={this.props.updateBook}
                                   shelfName="Read"
                                   shelfType="read"/>
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
