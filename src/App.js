import React, { Component } from "react";
import Book from "./Book";

class App extends Component {
  // state = {
  //   books: [
  //     {
  //       name: "A Game of Thrones",
  //       author: "George R. R. Martin",
  //       isbn: "978-0553103540",
  //       pages: "694"
  //     },
  //     {
  //       name: "A Clash of Kings",
  //       author: "George R. R. Martin",
  //       isbn: "978-0553108033",
  //       pages: "768"
  //     },
  //     {
  //       name: "A Storm of Swords",
  //       author: "George R. R. Martin",
  //       isbn: "978-0553106633",
  //       pages: "992"
  //     }
  //   ]
  // };

  state = {
    books: []
  };

  removeBook = index => {
    const { books } = this.state;

    this.setState({
      books: books.filter((book, i) => {
        return i !== index;
      })
    });
  };

  componentDidMount() {
    const url = "https://anapioficeandfire.com/api/books/";

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
    const { books } = this.state;

    // const books = [
    //   {
    //     name: "Game of Thrones",
    //     author: "Martin",
    //     pages: "123 pages"
    //   },
    //   {
    //     name: "Game of Thrones",
    //     author: "Martin",
    //     pages: "124 pages"
    //   },
    //   {
    //     name: "Game of Thrones",
    //     author: "Martin",
    //     pages: "125 pages"
    //   }
    // ];

    return (
      <div className="App">
        <h1>Game of Thrones Library</h1>
        {/* <Book />
        <Book /> */}
        {/* <Book bookData={books} /> */}
        <Book bookData={books} removeBook={this.removeBook} />
      </div>
    );
  }
}

export default App;
