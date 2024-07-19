// client/src/components/ShowBook.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { name } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const encodedURI = encodeURIComponent(name);
        const response = await fetch(`/api/book/` + encodedURI);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('404: This is not the webpage you are looking for');
          }
          throw new Error('Book not found');
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBook();
  }, [name]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>Books</h1>
        <h2>{book.name}</h2>
        <p>{book.author}</p>
        <p>{book.pages}</p>
    </div>
  );
}

export default BookDetails;
