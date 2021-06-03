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
        height: '60px',
        fontFamily: 'Montserrat',
        [theme.breakpoints.down('sm')]: {
            height: '40px'
        },
        [theme.breakpoints.down('xs')]: {
            height: '35px'
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
        fontSize: '18px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '13px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '11px'
        }
    },
    checkout: {
        display: 'flex',
        height: '60px',
        width: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px',
        boxShadow:  '6px 6px 12px #121417, -6px -6px 12px #22262b',
        '&:hover': {
            boxShadow: '10px 10px 20px #101214, -10px -10px 20px #24282e'
        },
        [theme.breakpoints.down('sm')]: {
            height: '40px',
            width: '40px',
            borderRadius: '20px',
            boxShadow:  '7px 7px 14px #0a0c0d, -7px -7px 14px #2a2e35',
            '&:hover': {
                boxShadow: '9px 9px 18px #0a0c0d, -9px -9px 18px #2a2e35'
            },
        },
        [theme.breakpoints.down('xs')]: {
            height: '35px',
            width: '35px',
        }
    },
    carticon: {
        height: '20px',
        [theme.breakpoints.down('sm')]: {
            height: '12px'
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
