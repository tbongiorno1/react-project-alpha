import React from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';
import request from 'superagent';
import Book from '../components/Book.jsx';
import googleBooks from '../google.config.js';

class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      book: {},
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.getNewBookCover = this.getNewBookCover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // this.getBookCovers();
  }

  getNewBookCover() {
    const { books, options } = googleBooks;
    books.search(this.state.title, options, (err, response) => {
      if(!err) {
        this.setState({
          book: response[0],
        })
      } else {
        console.log(err);
      }
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.getNewBookCover();
  }
  handleSearch(e) {
    const newTitle = e.target.value;
    this.setState({
      title: newTitle,
    });
  }
  render() {
    return (
      <div>
        <h1 id="listHeader">Welcome to the booklist</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="title"  onChange={this.handleSearch} placeholder="Search by title" />
          <input type="submit"/>
        </form>
        <ul id="listOfBooks">
          <li>
          <Book data={this.state.book}/>
          </li>
        </ul>
      </div>
    );
  }
}

export default BookList;
