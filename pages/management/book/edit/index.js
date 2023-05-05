import cx from 'classnames';
import Head from 'next/head';
import {
  Card,
  CardHeader,
  Grid,
  Container,
  TextField,
  Button,
  Typography
} from '@mui/material';
import SidebarLayout from 'src/layouts/SidebarLayout';
import Footer from 'src/components/Footer';

export default EditOeuvre;

function EditOeuvre() {
  return (
    <>
      <Head>
        <title>Modifier un Oeuvre </title>
      </Head>
      <div style={{ padding: 30 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Modifier un Oeuvre
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
          spacing={12}
        >
          <Grid item xs={12}>
            <Card>
              <Card>
                <CardHeader title="Merci de remplir ce formulaire" />
                <Container maxWidth="lg">
                  <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <Grid spacing={12}>
                      <form id="form">
                        <TextField
                          id="outlined-basic"
                          label="Title"
                          variant="outlined"
                        />
                        <br />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Auteur"
                          variant="outlined"
                        />
                        <br />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Editeur"
                          variant="outlined"
                        />
                        <br />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Genre"
                          variant="outlined"
                        />
                        <br />
                        <br />
                        <Button variant="contained" style={{ margin: 20 }}>
                          Modifier
                        </Button>
                      </form>
                    </Grid>
                  </div>
                </Container>
              </Card>
            </Card>
            {/* <StudentsList /> */}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
EditOeuvre.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
