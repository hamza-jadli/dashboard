import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import PageHeader from 'src/content/Management/book/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from 'src/content/Management/book/RecentOrders';

function ApplicationsEtudiant() {
  return (
    <>
      <Head>
        <title>Liste des livres</title>
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
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ApplicationsEtudiant.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsEtudiant;
