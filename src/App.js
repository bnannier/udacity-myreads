import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    onSearchChange(query) {
        console.log(query)
        BooksAPI.search(query,50).then(books => {
            this.setState({books})
        })
        console.log(this.state.books)
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks/>
                )}/>
                <Route path='/search' render={({history}) => (
                    <SearchBooks onSearchChange={(query) => {
                        this.onSearchChange(query)
                    }}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
