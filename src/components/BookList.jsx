import React from 'react';
import firebase from 'firebase';
import Book from '../components/Book.jsx';
import NewBook from '../components/NewBook.jsx';
import { Link } from 'react-router';

class BookList extends React.Component{
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <h1 id="listHeader">Welcome to the booklist</h1>
        <Link to= "/newbook">Create New Book</Link>
        <ul id="listOfBooks">
          <li>
          <Book />
          </li>
          <li id="book"><Link to= "/BookView">Book View</Link></li>
        </ul>
      </div>
    );
  }
}

export default BookList;
