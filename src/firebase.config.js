const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyD2YGVNX5o0KVm6nZ6_W4xrErcvWr0ZqQc",
    authDomain: "reading-list-bd318.firebaseapp.com",
    databaseURL: "https://reading-list-bd318.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "618018581885"
  };
  firebase.initializeApp(config);

module.exports = firebase;
