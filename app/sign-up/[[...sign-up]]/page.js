import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { SignUp, useUser} from "@clerk/nextjs"

export default function SignUpPage() {
    return(
         <Container maxWidth="100vw">
            <AppBar position="static">
                <Toolbar>
                    <Typography
                    variant="h6"
                    sx = {{
                        flexGrow: 1,
                    }}
                    >
                        Flashcard Service
                    </Typography>
                    
                    <Button color = "inherit">
                        <Link href = "/sign-in" passHref>
                            Login
                        </Link>
                    </Button>

                    <Button color = "inherit">
                        <Link href = "/sign-up" passHref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Box
                display = "flex"
                flexDirection = "column"
                alignItems = "center"
                justifyContent="center"
            >
                <Typography variant="h4">Sign Up</Typography>
                <SignUp />
            </Box>
        </Container>
    )
}