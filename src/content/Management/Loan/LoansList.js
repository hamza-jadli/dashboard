import { Card } from '@mui/material';
import LoansTable from './LoansTable';
import { subDays } from 'date-fns';

function LoansList() {
  const Loans = [
    {
      id: '1',
      id_student: 'aqwszxdc',
      orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      id_book: 'bhnjuiotgsf',
      duration: '13 jours',
    },
    {
        id: '2',
        id_student: 'ghjkloiuy',
        orderDate: subDays(new Date(), 1).getTime(),
        status: 'completed',
        id_book: 'nbvcxwqsd',
        duration: '10 jours',
      },
      {
        id: '3',
        id_student: 'bcvdfgtmlpoi',
        orderDate: subDays(new Date(), 1).getTime(),
        status: 'completed',
        id_book: 'hejdkolur',
        duration: '9 jours',
      },
      {
        id: '4',
        id_student: 'jhvhjidziokn',
        orderDate: subDays(new Date(), 1).getTime(),
        status: 'completed',
        id_book: 'vhtgldyfjdh',
        duration: '3 jours',
      },
    
  ];

  return (
    <Card>
      <LoansTable Orders={Loans} />
    </Card>
  );
}

export default LoansList;
