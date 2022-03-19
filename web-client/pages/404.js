import Head from "next/head";
import NextLink from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";

const NotFound = () => (
   <>
      <Head>
         <title>404 | Tokens Manager</title>
      </Head>
      <Box
         component="main"
         sx={{
            alignItems: "center",
            display: "flex",
            flexGrow: 1,
            minHeight: "100%",
         }}
      >
         <Container maxWidth="md">
            <Box
               sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
               }}
            >
               <Typography align="center" color="textPrimary" variant="h1">
                  404: The page you are looking for isn’t here
               </Typography>
               <Typography
                  align="center"
                  color="textPrimary"
                  variant="subtitle2"
               >
                  Oh no!
               </Typography>
               <Box sx={{ textAlign: "center" }}>
                  <Image
                     alt="Under development"
                     src="/static/images/undraw_page_not_found_su7k.svg"
                     width={560}
                     height={400}
                  />
               </Box>
               <NextLink href="/" passHref>
                  <Button
                     component="a"
                     startIcon={<ArrowBackIcon fontSize="small" />}
                     sx={{ mt: 3 }}
                     variant="contained"
                  >
                     Go back to dashboard
                  </Button>
               </NextLink>
            </Box>
         </Container>
      </Box>
   </>
);

export default NotFound;
