import { Button, Grid } from '@material-ui/core';
import React from 'react';
import logo from '../../media/logo.svg';
import cart from '../../media/checkout.svg'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navbar: {
        width: '94%',
        height: 'auto',
        padding: '3%',
        paddingTop: '2%'
    },
    navgrid: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: '130px',
        fontFamily: 'Montserrat',
        [theme.breakpoints.down('lg')]: {
            height: '110px'
        }
    },
    links: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    link: {
        fontFamily: 'Montserrat',  
        marginRight: '10%',
        fontWeight: '600',
        color: '#FFB027',
        fontSize: '33px',
        [theme.breakpoints.down('lg')]: {
            fontSize: '28px'
        }
    },
    checkout: {
        display: 'flex',
        height: '130px',
        width: '130px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        boxShadow:  '10px 10px 21px #141619, -10px -10px 21px #212429',
        '&:hover': {
            boxShadow: '16px 16px 32px #0a0c0d, -16px -16px 32px #2a2e35'
        },
        [theme.breakpoints.down('lg')]: {
            height: '110px',
            width: '110px',
        }
    },
    carticon: {
        height: '50px',
        [theme.breakpoints.down('lg')]: {
            height: '40px'
        }
    },
}), {index: 1})

function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <Grid className={classes.navgrid} container>
                <Grid item xs={6}>
                    <img className={classes.logo} src={logo} alt="logo"/>
                </Grid>
                <Grid item xs={6} className={classes.links}>
                    <Button className={classes.link}>USPs</Button>
                    <Button className={classes.link}>Pricing</Button>
                    <Button className={classes.checkout}>
                        <img className={classes.carticon} src={cart} alt="cart"/>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navbar
