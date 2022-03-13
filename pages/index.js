import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
// import { LatestOrders } from '../src/components/dashboard/latest-orders';
import { WalletBalanceCard } from '../src/components/dashboard/WalletBalanceCard';
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
            xl={4}
            lg={4}
            sm={6}
            xs={12}
          >
            <WalletBalanceCard sx={{ height: '100%' }} />
          </Grid>
          {/* <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
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
