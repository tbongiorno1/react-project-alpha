  const googleBooks = {
  books: require('google-books-search'),
  options: {
        key: 'AIzaSyDCXN-F3YO73a4p4BtP_7vx6OY_9YpGTN4',
        limit: 3,
        type: 'books',
        order: 'relevance',
        lang: 'en',
  },
};

module.exports = googleBooks;
