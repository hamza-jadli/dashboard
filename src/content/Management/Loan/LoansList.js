import { Card } from '@mui/material';
import LoansTable from './LoansTable';
import { subDays } from 'date-fns';
import { fetchJson } from 'src/api';
import { useEffect, useState } from 'react';

function LoansList() {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    fetchJson('loans').then((data) => {
      setLoans(data);
    });
  }, []);

  return (
    <Card>
      <LoansTable Orders={loans} />
    </Card>
  );
}

export default LoansList;
