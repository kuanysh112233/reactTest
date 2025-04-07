import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function BookGallery() {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books').then((res) => setBooks(res.data));
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <Link>
          </Link>
        </div>
      ))}
    </div>
  );
};
