import React from "react";
import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "../src/components/dashboard-layout";

function CreateTokenPage() {
   return (
      <>
         <Head>
            <title>Create Tokens</title>
         </Head>
         <Box
            component="main"
            sx={{
               flexGrow: 1,
               py: 8,
            }}
         >
            <Container maxWidth={false}>
               <Grid container spacing={3}></Grid>
            </Container>
         </Box>
      </>
   );
}

CreateTokenPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CreateTokenPage;
