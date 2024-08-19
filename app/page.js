import Image from "next/image";
import getStripe from "../utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="l00vw">
      <Head>
        <title>Flashcard Service</title>
        <meta name = "description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
        <Typography variant = "h6" style={{flexGrow: 1}}>Flashcard Service</Typography>
        <SignedOut>
          <Button color="inherit" href="/sign-in"> Login</Button>
          <Button color="inherit" href="/sign-up"> Sign Up</Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{
        textAlign: "center",
        my: 4,
      }}>
        <Typography variant= "h2" gutterBottom>Flashcard Service</Typography>
        <Typography variant="h5" gutterBottom>
          {' '}
          Flashcards made simple. Just paste your text and let us do the rest.
        </Typography>
        <Button variant='contained' color='primary' sx={{mt: 2}}>
          Get Started
        </Button>
      </Box>
      <Box sx = {{my: 6}}>
        <Typography variant = "h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy to Use
            </Typography>
            <Typography>
              {' '}
              Just paste your text and let us do the rest. Making Flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards
            </Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into concise flashcards perfect for studying.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Accessible Anywhere
            </Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: "center"}}>
        <Typography variant = "h4" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h5" gutterBottom>Basic</Typography>
            <Typography variant="h6" gutterBottom>$5 / month</Typography>
            <Typography>
              {' '}
              Access to basic flashcard features and limited storage.
            </Typography>
            <Button variant="contained" color = "primary" sx={{mt: 2}}>Chose BASIC</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
              }}>
              <Typography variant="h5" gutterBottom>Pro</Typography>
              <Typography variant="h6" gutterBottom>$10 / month</Typography>
              <Typography>
                {' '}
                Unlimited flashcards and storage, with priority support.
              </Typography>
              <Button variant="contained" color = "primary" sx={{mt: 2}}>Chose PRO</Button>
              </Box>
            </Grid>
        </Grid>
      </Box>
    </Container>
    
  )
}
