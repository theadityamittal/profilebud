import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60vh',
        width: '100%',     
        [theme.breakpoints.down('sm')]:{
            height: '55vh',
        }, 
    },
    headtext: {
        fontFamily: 'Montserrat',
        color: '#FFF',
        fontWeight: '800',
        fontSize: '250%',
        textAlign: 'center',
        [theme.breakpoints.down('md')]:{
            fontSize: '200%',
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '150%',
        }
    },
    subtext: {
        fontFamily: 'Montserrat',
        color: '#646464',
        fontWeight: '600',
        textAlign: 'center',
        paddingLeft: '15%',
        paddingRight: '15%',
        fontSize: '152%',
        maxWidth: '600px',
        [theme.breakpoints.down('md')]:{
            fontSize: '120%',
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '100%',
        }
    },
    headbutton: {
        fontFamily: 'Montserrat',
        color: '#FFB027',
        fontSize: '130%',
        fontWeight: '800',
        textAlign: 'center',    
        padding: '1.5%',
        paddingLeft: '3.5%',
        paddingRight: '3.5%',
        borderRadius: '48px',
        background: '#1A1D21',
        boxShadow:  '10px 10px 20px #111315, -10px -10px 20px #23272d',
        '&:hover': {
            boxShadow:  '18px 18px 36px #111315, -18px -18px 36px #23272d',
            background: '#1A1D21',
        },
        [theme.breakpoints.down('md')]:{
            fontSize: '110%',
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '100%',
            padding: '4%',
            paddingLeft: '6%',
            paddingRight: '6%',
        }
    }
}), {index: 1})

function Header() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.header}>
            <Typography className={classes.headtext}>{"We Extract Leads & Data From Instagram"}</Typography>
            <Typography className={classes.subtext}>{`Our agency does all the hardwork and gives you the clean targeted data in Sheets!`}</Typography>
            <Button className={classes.headbutton} variant='button' >{"Get Leads"}</Button>            
        </Container>
    )
}

export default Header
