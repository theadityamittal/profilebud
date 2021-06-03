import { Button, Grid } from '@material-ui/core';
import React from 'react';
import logo from '../../media/logo.svg';
import cart from '../../media/checkout.svg'
import useStyles from './styles';

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
