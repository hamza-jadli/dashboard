import { Card } from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders() {
  const etudiant = [
    {
      id: '1',
      nom: 'JADLI',
      orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      orderID: 'HAMZA',
      adresse: 'CASABLANCA',
      amountCrypto: 'jadli.hamza@gmail.com',
    },
    {
      id: '2',
      nom: 'AGHSSAL',
      status: 'completed',
      orderID: 'AMINE',
      adresse: 'BOUZNIKA',
      amountCrypto: 'jamine.aghssal@gmail.com',
    },
    {
      id: '3',
      nom: 'MOURID',
      status: 'completed',
      orderID: 'ZAKARIA',
      adresse: 'CASABLANCA',
      amountCrypto: 'mourid.zakaria@gmail.com',
    },
    {
      id: '4',
      nom: 'TACOS',
      status: 'completed',
      orderID: 'ILLIASS',
      adresse: 'KHOURIBGA',
      amountCrypto: 'illiass.tacos@gmail.com',
    },
    {
      id: '5',
      nom: 'TAHZIMA',
      status: 'completed',
      orderID: 'ILYAS',
      adresse: 'SAFI',
      amountCrypto: 'ilyas.tahzima@gmail.com',
    },
    {
      id: '6',
      nom: 'ELHAKIMI',
      status: 'completed',
      orderID: 'OSSAMA',
      adresse: 'CASABLANCA',
      amountCrypto: 'ossama.elhakimi@gmail.com',
    },
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={etudiant} />
    </Card>
  );
}

export default RecentOrders;
