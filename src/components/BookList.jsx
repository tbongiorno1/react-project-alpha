import React from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';
import request from 'superagent';
import Book from '../components/Book.jsx';

class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      covers: [],
      isbn: '',
    }
  }
  componentDidMount() {
    this.getBookCovers();
  }
  getBookCovers() {
    
  }
  getNewBookCover() {
    const isbn = this.props.isbn;
    const url = `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    request.get(url).then((response) => {
      const coverOfBook = response.body;
      let covers = [];
      if (coverOfBook) {
        covers = Object.keys(coverOfBook).map((id) => {
          const individualCoverData = coverOfBook[id];
          return {
            id,
            isbn: individualCoverData.isbn,
            title: individualCoverData.title,
          };
        });
      }
      this.setState({ covers });
    });
  }
  goDeleteCover(isbn) {
    const url = `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    request.del(url)
           .then(() => {
             this.getBookCovers();
           });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleEditOfIsbn(e) {
    const newIsbn = e.target.value;
    this.setState({
      isbn: newIsbn,
    });
  }
  render() {
    return (
      <div>
        <h1 id="listHeader">Welcome to the booklist</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="isbn" placeholder="Search by isbn #" />
          <input type="submit" onSubmit={this.getBookCover}/>
        </form>
        <ul id="listOfBooks">
          <li>
          <Book />
          <button onClick={this.goDeleteCover}>x</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default BookList;
