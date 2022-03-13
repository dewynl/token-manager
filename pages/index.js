import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { LatestOrders } from '../src/components/dashboard/latest-orders';
import { TotalProfit } from '../src/components/dashboard/total-profit';
import { DashboardLayout } from '../src/components/dashboard-layout';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Tokens Manager
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={12}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
