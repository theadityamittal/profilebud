import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        width: '74%',
        height: '300px',
        margin: '5% auto',
        padding: '8%',
        paddingBottom: '3%',
        backgroundColor: '#1A1D21',
        borderRadius: '37px',
        boxShadow:  '16px 16px 27px #0e1012, -16px -16px 27px #262a30',
        '&:hover': {
            background: 'linear-gradient(145deg, #171a1e, #1c1f23)',
        },
    },
    cardcontainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    carddata: {
        height: '60%'
    },
    cardheader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    circle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45px',
        width: '45px',
        borderRadius: '50%',
        background: '#1A1D21',
        boxShadow:  'inset 10px 10px 23px #0a0c0d, inset -10px -10px 23px #2a2e35',
        marginRight: '5%',
    },
    dot: {
        height: 'fit-content',
        width: 'fit-content'              
    },
    cardtitle: {
        color: '#646464',
        fontWeight: '600',
        fontSize: '150%',
        fontFamily: 'Montserrat',
        marginBottom: '20px',
        [theme.breakpoints.down('md')]:{
            fontSize: '120%'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '110%'
        }
    },
    cardtext: {
        color: '#646464',
        fontWeight: '300',
        fontFamily: 'Montserrat',
        fontSize: '100%',
        [theme.breakpoints.down('sm')]:{
            fontSize: '97%'
        }
    },
    buttonGrid:{
        height: '40%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    },
    cardbutton: {
        width: 'fit-content',
        margin: 'auto',
        padding: '5%',
        paddingLeft: '7.5%',
        paddingRight: '7.5%',
        fontFamily: 'Montserrat',
        fontSize: '110%',
        fontWeight: '800',
        borderRadius: '36px',
        boxShadow:  '18px 18px 36px #0f1113, -18px -18px 36px #25292f',
        '&:hover': {
            boxShadow:  '20px 20px 40px #111316, -20px -20px 40px #23272c',
        },
    }
}), {index: 1})

function Card( { title, color } ) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <Grid container className={classes.cardcontainer}>
                <Grid item className={classes.carddata} xs={12}>
                    <div className={classes.cardheader}>
                        <div className={classes.circle}><i className={`fas fa-circle fa-md ${classes.dot}`} style={{color: color}}></i></div>
                        <Typography className={classes.cardtitle}>{title}</Typography>
                    </div>
                    <Typography className={classes.cardtext}>{"Lorem ipsum something is here. Something else will come here. Oh yes it will come"}</Typography>
                </Grid>
                <Grid item className={classes.buttonGrid} xs={12}>
                    <Button className={classes.cardbutton} style={{color: color}}>
                        Sample Data
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card
