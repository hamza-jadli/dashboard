import { Card } from '@mui/material';
import BooksTable from './BooksTable';
import { subDays } from 'date-fns';

function BooksList() {
  const Books = [
    {
      id: '1',
      title: '1984',
      status: 'completed',
      auteur: 'George Orwell ',
      editeur: 'Secker and Warburg',
      genre: 'dystopie',
    },
    {
        id: '2',
        title: 'Le Seigneur des anneaux',
        status: 'completed',
        auteur: 'J.R.R. Tolkien',
        editeur: 'Allen & Unwin',
        genre: 'fantasy',
    },
  ];

  return (
    <Card>
      <BooksTable Orders={Books} />
    </Card>
  );
}

export default BooksList;
