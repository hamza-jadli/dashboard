import { Card } from '@mui/material';
import BooksTable from './BooksTable';
import React, { useState, useEffect } from 'react';
import { fetchJson } from 'src/api';

function BooksList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchJson('books').then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <Card>
      <BooksTable Orders={books} />
    </Card>
  );
}

export default BooksList;
