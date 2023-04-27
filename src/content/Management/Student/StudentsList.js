import { Card } from '@mui/material';
import StudentsTable from './StudentsTable';
import { subDays } from 'date-fns';

function StudentsList() {
  const Students = [
    {
      id: '1',
      nom: 'JADLI',
      orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      prenom: 'HAMZA',
      adresse: 'CASABLANCA',
      email: 'jadli.hamza@gmail.com',
    },
    {
      id: '2',
      nom: 'AGHSSAL',
      status: 'completed',
      prenom: 'AMINE',
      adresse: 'BOUZNIKA',
      email: 'jamine.aghssal@gmail.com',
    },
    {
      id: '3',
      nom: 'MOURID',
      status: 'completed',
      prenom: 'ZAKARIA',
      adresse: 'CASABLANCA',
      email: 'mourid.zakaria@gmail.com',
    },
    {
      id: '4',
      nom: 'TACOS',
      status: 'completed',
      prenom: 'ILLIASS',
      adresse: 'KHOURIBGA',
      email: 'illiass.tacos@gmail.com',
    },
    {
      id: '5',
      nom: 'TAHZIMA',
      status: 'completed',
      prenom: 'ILYAS',
      adresse: 'SAFI',
      email: 'ilyas.tahzima@gmail.com',
    },
    {
      id: '6',
      nom: 'ELHAKIMI',
      status: 'completed',
      prenom: 'OSSAMA',
      adresse: 'CASABLANCA',
      email: 'ossama.elhakimi@gmail.com',
    },
  ];

  return (
    <Card>
      <StudentsTable Orders={Students} />
    </Card>
  );
}

export default StudentsList;
