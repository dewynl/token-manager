import React from "react"
import Head from "next/head"
import { Box, Button, Container, Typography } from "@mui/material"
import { DashboardLayout } from "../src/components/dashboard-layout"

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
            }}>
            <Container maxWidth={false}>
               <Box
                  sx={{
                     alignItems: "center",
                     display: "flex",
                     justifyContent: "space-between",
                     flexWrap: "wrap",
                     m: -1,
                  }}>
                  <Typography sx={{ m: 1 }} variant="h4">
                     Tokens
                  </Typography>
                  <Button color="primary" variant="contained">
                     Create Token
                  </Button>
               </Box>
               <Box sx={{ m: 1 }}></Box>
            </Container>
         </Box>
      </>
   )
}

CreateTokenPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default CreateTokenPage
