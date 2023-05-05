import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import PageHeader from 'src/content/Management/book/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import BooksList from 'src/content/Management/book/BooksList';

function ApplicationsStudent() {
  return (
    <>
      <Head>
        <title>Liste des oeuvres</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <BooksList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ApplicationsStudent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ApplicationsStudent;
