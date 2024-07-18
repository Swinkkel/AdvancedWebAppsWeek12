// client/src/components/AddBook.js
import React, { useState } from 'react';

function AddBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, author, pages })
      });
      if (response.ok) {
        alert('Book added successfully');
        setName('');
        setAuthor('');
        setPages('');
      } else {
        alert('Failed to add book');
      }
    } catch (error) {
      console.error('Error adding book', error);
      alert('Failed to add book');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Book Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="pages">Pages</label>
        <input
          id="pages"
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          required
        />
      </div>
      <div>
        <input id="submit" type="submit" value="Add Book" />
      </div>
    </form>
  );
}

export default AddBook;
