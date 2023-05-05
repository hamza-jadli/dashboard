import { Card } from '@mui/material';
import StudentsTable from './StudentsTable';
import { subDays } from 'date-fns';
import { useState, useEffect } from 'react';
import { fetchJson } from 'src/api';
function StudentsList() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchJson('students').then((data) => {
      setStudents(data);
    });
  }, []);

  return (
    <Card>
      <StudentsTable Orders={students} />
    </Card>
  );
}

export default StudentsList;
