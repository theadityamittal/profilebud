import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        width: '80%',
        height: '1000px',
        margin: 'auto',
        marginTop: '7%',
        marginBottom: '9%',
        [theme.breakpoints.down('lg')]: {
            height: 'auto'
        },
    },
    text: {
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
    cardtitle: {
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
    yellow: {
        color: '#FFB027',
    },
    bold: {
        fontWeight: '600'
    },
    uppercase: {
        textTransform: 'uppercase'
    }
}), {index: 1})

function Subscription() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container} spacing={10}>
            <Grid item  xs={12} lg={8}>
                <div className={classes.subscard}>
                    <Typography className={`${classes.bold} ${classes.text} ${classes.uppercase} ${classes.cardtitle}`}>Number of Accounts</Typography>
                    <div className={classes.input}>
                        {/* <Typography className={`${classes.text} ${classes.uppercase}`}>Enter Number Here</Typography> */}
                        <input className={classes.textfield} placeholder="Enter Number Here" type="number"></input>
                    </div>
                    <Typography className={`${classes.bold} ${classes.text} ${classes.uppercase} ${classes.price}`}>$0.00</Typography>
                </div>
            </Grid>
            <Grid item xs={12} lg={4}>
                <div className={classes.rates}>
                    <Typography className={`${classes.uppercase} ${classes.yellow} ${classes.text}`}>Try it Free</Typography>
                    <div>
                        <Typography className={`${classes.bold} ${classes.text}`}>Pay As You Go Rates</Typography>
                        <Typography className={classes.text}>Emails Price per email</Typography>
                        <Typography className={classes.text}>up to 10,000 $0.0008</Typography>
                        <Typography className={classes.text}>up to 100,000 $0.0005</Typography>
                        <Typography className={classes.text}>up to 250,000 $0.0004</Typography>
                        <Typography className={classes.text}>up to 1,000,000 $0.0003</Typography>
                    </div>
                    <div>
                        <Typography className={`${classes.bold} ${classes.text}`}>Enterprise Packages</Typography>
                        <Typography className={classes.text}>over 1,000,000</Typography>
                    </div>
                    <Typography className={`${classes.yellow} ${classes.text}`}>Contact Us</Typography>
                    <Typography className={`${classes.uppercase} ${classes.text} ${classes.bold} ${classes.yellow}`}>Learn More About Enterprise</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default Subscription
