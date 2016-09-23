import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';

const BookView = () => {
  return (
    <div>
    <Link to= "/BookList">Back To List</Link>
      <h1>BookView</h1>
      <ul>
        <li id="bookViewBook"></li>
        <li id="bookInfo">
          <h1>Title:</h1>
          <h1>Author:</h1>
          <h1>Year:</h1>
        </li>
        <div id="description">
          <h1>Description:</h1>
        </div>
        <div id="comments">
        <h1>Comments:</h1>
        </div>
      </ul>
    </div>
  );
}

export default BookView;
