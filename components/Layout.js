import React from 'react';
import Head from 'next/head'
import NextLink from 'next/link'
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyle from '../utils/styles';
import { Link } from '@material-ui/core';



const Layout = ({ title, children }) => {
    const classes = useStyle()
    return (
        <div>
            <Head>

                <title>{title ? `${title} -Next Amazona` : 'Next Amazona'}</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>amazona</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}> </div>
                    <div>
                        <NextLink href="/cart" passHref >
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography variant='h6' sx={{ fontWeight: 600 }}  >
                    All Rights reserved . Next Amazona
                </Typography>
            </footer>
        </div>
    );
};

export default Layout;