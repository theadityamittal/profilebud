import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

function Subscription() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container} spacing={10}>
            <Grid item  xs={6} sm={8}>
                <div className={classes.subscard}>
                    <Typography className={`${classes.bold} ${classes.text} ${classes.uppercase} ${classes.cardtitle}`}>Number of Accounts</Typography>
                    <div className={classes.input}>
                        {/* <Typography className={`${classes.text} ${classes.uppercase}`}>Enter Number Here</Typography> */}
                        <input className={classes.textfield} placeholder="Enter Number Here" type="number"></input>
                    </div>
                    <Typography className={`${classes.bold} ${classes.text} ${classes.uppercase} ${classes.price}`}>$0.00</Typography>
                </div>
            </Grid>
            <Grid item xs={6} sm={4}>
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
