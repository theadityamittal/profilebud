import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    subscontainer: {
        width: '80%',
        height: '1000px',
        margin: 'auto',
        marginTop: '7%',
        marginBottom: '9%',
        [theme.breakpoints.down('lg')]: {
            height: 'auto'
        },
    },
    substext: {
        fontFamily: 'Montserrat',
        fontWeight: '300',
        fontSize: '240%',
        color: '#646464',
        [theme.breakpoints.down('lg')]: {
            fontSize: '170%',
            textAlign: 'center'
        },
    },
    subscard:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '85%',
        width: '80%',
        padding: '5%',
        margin: '0% auto',
        borderRadius: '52px',
        background: '#1a1d21',
        boxShadow:  '22px 22px 44px #111316, -22px -22px 44px #23272c',
        '&:hover': {
            background: 'linear-gradient(145deg, #171a1e, #1c1f23)'
        },
        [theme.breakpoints.down('lg')]: {
            height: '500px'
        },
    },
    subscardtitle: {
        color: '#fff',
        fontSize: '300%',
        [theme.breakpoints.down('lg')]: {
            fontSize: '230%'
        }
    },
    input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        margin: 'auto',
        height: '50px',
        padding: '4%',
        border: '15px solid #1a1d21',
        borderRadius: '100px',
        background: '#1a1d21',
        boxShadow:  '33px 33px 66px #0e1012, -33px -33px 66px #262a30, inset 12px 12px 24px #0e1012, inset -12px -12px 24px #262a30',
    },
    textfield: {
        width: '100%',
        height: '100%',
        background: '#00000000',
        textAlign: 'center',
        border: 'none',
        fontFamily: 'Montserrat',
        fontWeight: '300',
        fontSize: '240%',
        color: '#FFB027',
        textTransform: 'uppercase',
        padding: '5%',
        outline: 'none',
        '&:placeholder': {
            color: '#646464'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '150%'
        },
    },
    price: {
        color: '#fff',
        fontSize: '1000%',
        [theme.breakpoints.down('lg')]: {
            fontSize: '600%'
        }
    },
    rates: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        [theme.breakpoints.down('lg')]: {
            alignItems: 'center'
        },
    },
    toyellow: {
        color: '#FFB027',
    },
    tobold: {
        fontWeight: '600'
    },
    toupperase: {
        textTransform: 'uppercase'
    }
}), {index: 1})

function Subscription() {
    const classes = useStyles();

    return (
        <Grid container className={classes.subscontainer} spacing={10}>
            <Grid item  xs={12} lg={8}>
                <div className={classes.subscard}>
                    <Typography className={`${classes.tobold} ${classes.substext} ${classes.touppercase} ${classes.subscardtitle}`}>Number of Accounts</Typography>
                    <div className={classes.input}>
                        <input className={classes.textfield} placeholder="Enter Number Here" type="number"></input>
                    </div>
                    <Typography className={`${classes.tobold} ${classes.substext} ${classes.touppercase} ${classes.price}`}>$0.00</Typography>
                </div>
            </Grid>
            <Grid item xs={12} lg={4}>
                <div className={classes.rates}>
                    <Typography className={`${classes.touppercase} ${classes.toyellow} ${classes.substext}`}>Try it Free</Typography>
                    <div>
                        <Typography className={`${classes.tobold} ${classes.substext}`}>Pay As You Go Rates</Typography>
                        <Typography className={classes.substext}>Emails Price per email</Typography>
                        <Typography className={classes.substext}>up to 10,000 $0.0008</Typography>
                        <Typography className={classes.substext}>up to 100,000 $0.0005</Typography>
                        <Typography className={classes.substext}>up to 250,000 $0.0004</Typography>
                        <Typography className={classes.substext}>up to 1,000,000 $0.0003</Typography>
                    </div>
                    <div>
                        <Typography className={`${classes.tobold} ${classes.substext}`}>Enterprise Packages</Typography>
                        <Typography className={classes.substext}>over 1,000,000</Typography>
                    </div>
                    <Typography className={`${classes.toyellow} ${classes.substext}`}>Contact Us</Typography>
                    <Typography className={`${classes.touppercase} ${classes.substext} ${classes.tobold} ${classes.yellow}`}>Learn More About Enterprise</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default Subscription
