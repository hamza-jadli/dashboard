import cx from 'classnames';
import Head from 'next/head';
import {
  Card,
  CardHeader,
  Grid,
  Container,
  TextField,
  Button,
  PageTitleWrapper,
  Typography
} from '@mui/material';
import SidebarLayout from 'src/layouts/SidebarLayout';
import Footer from 'src/components/Footer';
export default AddLoan;

function AddLoan() {
  return (
    <>
      <Head>
        <title>Ajouter Emprunt</title>
      </Head>
      <div style={{ padding: 30 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Ajouter un Emprunt
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
                          Ajouter
                        </Button>
                      </form>
                    </Grid>
                  </div>
                </Container>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
AddLoan.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
