import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function Header() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.header}>
            <Typography className={classes.headtext}>{"We Extract Leads & Data From Intstagram"}</Typography>
            <Typography className={classes.subtext} variant='h3' >{`Our agency does all the hardwork and gives you the clean targeted data in Sheets!`}</Typography>
            <Button className={classes.button} variant='button' >{"Get Leads"}</Button>            
        </Container>
    )
}

export default Header
