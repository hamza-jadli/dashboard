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

export default EditLoan;

function EditLoan() {
  return (
    <>
      <Head>
        <title>Modifier un Emprunt </title>
      </Head>
      <div style={{ padding: 30 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Modifier un Emprunt
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
                          label="Student ID"
                          variant="outlined"
                        />
                        <br />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Date"
                          variant="outlined"
                        />
                        <br />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Book ID"
                          variant="outlined"
                        />
                        <br />
                        <br />
                        <TextField
                          id="outlined-basic"
                          label="Durée"
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
EditLoan.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
