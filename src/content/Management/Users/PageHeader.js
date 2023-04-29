import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'JADLI HAMZA',
    avatar: 'https://i.pinimg.com/474x/1a/61/68/1a6168ed19756dbb1a815ea085bfbc65.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Liste des utilisateurs
        </Typography>
      </Grid>
      <Grid item>
        <Button
          href='user/add'
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Nouveau utilisateur
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
