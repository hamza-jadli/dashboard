import { Card } from '@mui/material';
import RecentOrdersTable from './RecentOrdersTables';
import { subDays } from 'date-fns';

function RecentOrders() {
  const livre = [
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
    {
        id: '3',
        title: 'Le Petit Prince',
        status: 'completed',
        auteur: 'Antoine de Saint-Exupéry',
        editeur: 'Reynal & Hitchcock',
        genre: 'conte philosophique',
    },
    {
        id: '4',
        title: "Harry Potter à l'école des sorciers",
        status: 'completed',
        auteur: 'J.K. Rowling ',
        editeur: 'Bloomsbury',
        genre: 'littérature de jeunesse, fantasy',
    },
    {
        id: '5',
        title: 'Guerre et Paix',
        status: 'completed',
        auteur: 'Léon Tolstoï',
        editeur: 'The Russian Messenger',
        genre: 'roman historique',
    },
   
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={livre} />
    </Card>
  );
}

export default RecentOrders;
