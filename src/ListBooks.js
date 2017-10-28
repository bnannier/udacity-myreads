import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

/**
 * @description List all the books on the shelf(s).
 */
class ListBooks extends Component {
    /**
     * @description Render the layout for the shelves and navigation button to search.
     */
    render() {
        const shelves = [
            {
                id: 'currentlyReading',
                title: 'Currently Reading'
            },
            {
                id: 'wantToRead',
                title: 'Want To Read'
            },
            {
                id: 'read',
                title: 'Read'
            },
        ]

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Bobby's Shelf</h1>
                </div>
                <div className="list-books-content">
                    {this.renderShelves(shelves)}
                </div>
                <div className="open-search">
                    <Link className='close-create-contact' to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }

    /**
     * @description Render the individual shelf.
     */
    renderShelves(shelves) {
        return (
            shelves.map(shelf => (
                    <BookShelf shelfBooks={this.props.shelfBooks}
                               updateBook={this.props.updateBook}
                               shelfName={shelf.title}
                               shelfType={shelf.id}/>
                )
            )
        )
    }
}

export default ListBooks
