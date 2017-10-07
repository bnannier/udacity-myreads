import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.book.shelf};
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({value: e.target.value});
        BooksAPI.update(this.props.book, e.target.value)
        this.props.renderBookShelf;
    }

    render() {
        const {book} = this.props;
        console.dir(book)

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
                                <select value={this.state.value} onChange={this.handleChange}>
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

    selectedShelf() {

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
