import React from "react";

const BookInfo = props => {
  const rows = props.bookData.map((row, index) => {
    return (
      <div className="book" key={index}>
        <h1>{row.name}</h1>
        <h3>{row.authors[0]}</h3>
        <p>{row.numberOfPages} pages</p>
        <p>{row.isbn}</p>
        <button onClick={() => props.removeBook(index)}>Remove</button>
      </div>
    );
  });

  return <div>{rows}</div>;
};

class Book extends React.Component {
  render() {
    const { bookData, removeBook } = this.props;
    // const { bookData } = this.props;

    return <BookInfo bookData={bookData} removeBook={removeBook} />;
    // return <BookInfo bookData={bookData} />;
    // return <h2>book #1</h2>;
  }
}

export default Book;
