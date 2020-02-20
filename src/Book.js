import React from 'react';

// Part 2 - Props
// const BookInfo = props => {
//   const rows = props.bookData.map((row, index) => {
//     return (
//       <div className='book' key={index}>
//         <h1>{row.name}</h1>
//         <h3>{row.author}</h3>
//         <p>{row.pages} pages</p>
//       </div>
//     );
//   });
//   return <div>{rows}</div>;
// };

// Part 3 - State
// const BookInfo = props => {
//   const rows = props.bookData.map((row, index) => {
//     return (
//       <div className='book' key={index}>
//         <h1>{row.name}</h1>
//         <h3>{row.author}</h3>
//         <h3>{row.isbn}</h3>
//         <p>{row.pages} pages</p>
//       </div>
//     );
//   });
//   return <div>{rows}</div>;
// };

// Part 3.1 - State
// const BookInfo = props => {
//   const rows = props.bookData.map((row, index) => {
//     return (
//       <div className='book' key={index}>
//         <h1>{row.name}</h1>
//         <h3>{row.author}</h3>
//         <h3>{row.isbn}</h3>
//         <p>{row.pages} pages</p>
//         <button onClick={() => props.removeBook(index)}>Remove</button>
//       </div>
//     );
//   });
//   return <div>{rows}</div>;
// };

// Step 4 - Fetch Data
const BookInfo = props => {
  const rows = props.bookData.map((row, index) => {
    return (
      <div className='book' key={index}>
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
    // Step #1 - Setting up a custom component
    // return <h2>book #1</h2>;

    // Step #2 - Setting up props
    // const { bookData } = this.props;
    // return <BookInfo bookData={bookData} />;

    // Step #3 - Adding State
    // const { bookData } = this.props;
    // return <BookInfo bookData={bookData} />;

    // Step #3.1 - Adding State
    // const { bookData, removeBook } = this.props;
    // return <BookInfo bookData={bookData} removeBook={removeBook} />;

    // Step #4 - Fetching Data
    const { bookData, removeBook } = this.props;
    return <BookInfo bookData={bookData} removeBook={removeBook} />;
  }
}

export default Book;
