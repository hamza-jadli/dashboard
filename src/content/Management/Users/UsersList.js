import { Card } from '@mui/material';
import UsersTable from './UsersTable';
import { subDays } from 'date-fns';

function UsersList() {
  const Users = [
    {
      id: '1',
      nom: 'JADLI',
      etat: 'completed',
      prenom: 'HAMZA',
      statut: 'Bibliothécaire',
      email: 'jadli.hamza@gmail.com',
    },
    {
      id: '2',
      nom: 'AGHSSAL',
      etat: 'completed',
      prenom: 'AMINE',
      statut: 'Administrateur',
      email: 'jamine.aghssal@gmail.com',
    },
    {
      id: '3',
      nom: 'MOURID',
      etat: 'completed',
      prenom: 'ZAKARIA',
      statut: 'Employé ',
      email: 'mourid.zakaria@gmail.com',
    },
    {
      id: '4',
      nom: 'TACOS',
      etat: 'completed',
      prenom: 'ILLIASS',
      statut: 'Employé ',
      email: 'illiass.tacos@gmail.com',
    },
    {
      id: '5',
      nom: 'TAHZIMA',
      etat: 'completed',
      prenom: 'ILYAS',
      statut: 'Employé ',
      email: 'ilyas.tahzima@gmail.com',
    },
    {
      id: '6',
      nom: 'ELHAKIMI',
      etat: 'completed',
      prenom: 'OSSAMA',
      statut: 'Employé ',
      email: 'ossama.elhakimi@gmail.com',
    },
  ];

  return (
    <Card>
      <UsersTable Orders={Users} />
    </Card>
  );
}

export default UsersList;
