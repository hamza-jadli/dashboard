import cx from 'classnames';
import Head from 'next/head';
import { Card,CardHeader,Grid, Container,TextField,Button,Typography } from '@mui/material';
import SidebarLayout from 'src/layouts/SidebarLayout';
import Footer from 'src/components/Footer';
import PageHeader from 'src/content/Management/Users/PageHeader';

export default AddUser;

function AddUser() {
  return (
    <>
      <Head>
        <title>Ajouter un Utilisateur</title>
      </Head>
      <div style={{padding:30}}>
      <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Ajouter un Utilisateur
        </Typography>
      </Grid>
      </Grid>
      </div>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card> 
              <Card>
                
              <CardHeader title="Ajouter un Utilisateur"/>
              <div style={{paddingLeft:200}}>
              <form id='form'>
                <TextField id="outlined-basic" label="Nom" variant="outlined" /><br/><br/>
                <TextField id="outlined-basic" label="Prenom" variant="outlined" /><br/><br/>
                <TextField id="outlined-basic" label="Statut" variant="outlined" /><br/><br/>
                <TextField id="outlined-basic" label="Email" variant="outlined" /><br/><br/>
                <Button variant="contained" style={{margin:20}}>Ajouter</Button>
              </form>
              </div> 
              </Card>
            </Card>
            {/* <StudentsList /> */}
          </Grid>
        </Grid>
      </Container>
<Footer/>
    </>
  )
}
AddUser.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);
