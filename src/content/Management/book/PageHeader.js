import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'The coumpond effect',
    avatar: 'https://m.media-amazon.com/images/I/4142lGvq+qL._SX350_BO1,204,203,200_.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Liste des livres
        </Typography>
      </Grid>
      <Grid item>
        <Button
          href='book/add'
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Nouveau livre
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
