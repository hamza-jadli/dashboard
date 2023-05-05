import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import PageHeader from 'src/content/Management/Users/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import StudentsList from 'src/content/Management/Users/UsersList';

function ApplicationsStudent() {
  return (
    <>
      <Head>
        <title>Liste des utilisateurs</title>
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
            <StudentsList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ApplicationsStudent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ApplicationsStudent;
