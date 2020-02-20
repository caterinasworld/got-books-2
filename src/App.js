import React, { Component } from 'react';
import Book from './Book';

class App extends Component {
  // Step #3 - Adding State
  // state = {
  //   books: [
  //     {
  //       name: 'A Game of Thrones',
  //       author: 'George R. R. Martin',
  //       isbn: '978-0553103540',
  //       pages: '694'
  //     },
  //     {
  //       name: 'A Clash of Kings',
  //       author: 'George R. R. Martin',
  //       isbn: '978-0553108033',
  //       pages: '768'
  //     },
  //     {
  //       name: 'A Storm of Swords',
  //       author: 'George R. R. Martin',
  //       isbn: '978-0553106633',
  //       pages: '992'
  //     }
  //   ]
  // };

  // Step 3.1 - State
  // removeBook = index => {
  //   const { books } = this.state;

  //   this.setState({
  //     books: books.filter((book, i) => {
  //       return i !== index;
  //     })
  //   });
  // };

  // Step 4 - Fetch Data
  removeBook = index => {
    const { books } = this.state;

    this.setState({
      books: books.filter((book, i) => {
        return i !== index;
      })
    });
  };

  state = {
    books: []
  };

  componentDidMount() {
    const url = 'https://anapioficeandfire.com/api/books/';

    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          books: result
        });
      });
  }

  render() {
    // Step #3 - Adding State / Step #4 - Fetching Data
    const { books } = this.state;

    // Step #2 - Props
    // const books = [
    //   {
    //     name: 'Game of Thrones',
    //     author: 'Martin',
    //     pages: '123 pages'
    //   },
    //   {
    //     name: 'Game of Thrones',
    //     author: 'Martin',
    //     pages: '124 pages'
    //   },
    //   {
    //     name: 'Game of Thrones',
    //     author: 'Martin',
    //     pages: '125 pages'
    //   }
    // ];

    return (
      <div className='App'>
        {/* Step #1 - Setting up a custom component */}
        {/* <h1>Game of Thrones Books</h1>
        <Book />
        <Book /> */}

        {/* Step #2 - Props */}
        {/* <h1>Game of Thrones Books</h1>
        <Book bookData={books} /> */}

        {/* Step #3 - Props */}
        {/* <h1>Game of Thrones Books</h1>
        <Book bookData={books} /> */}

        {/* Step #3.1 - Props */}
        {/* <h1>Game of Thrones Books</h1>
        <Book bookData={books} removeBook={this.removeBook} /> */}

        {/* Step #4 - Fetching data */}
        <h1>Game of Thrones Books</h1>
        <Book bookData={books} removeBook={this.removeBook} />
      </div>
    );
  }
}

export default App;
