import React, { Component } from 'react'

class Book extends Component {
    render() {
        const {book} = this.props
        if(book.id !== null) {
            return (
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                            {this.renderAuthorName(book.authors)}
                        </div>
                    </div>
                </li>
            )
        }else {
            return null
        }
    }

    renderAuthorName(authors) {
        if (authors !== undefined) {
            return (
                authors.map((author) => (
                    <div key={author}>{author}</div>
                ))
            )
        }
    }
}

export default Book
