// src/Bookshelf.jsx
import { useState } from 'react';
import './App.css'; // Ensure this import is here to apply the styles

const BookShelf = () => {
  // Define the initial state
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Create event handlers
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Author:
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
