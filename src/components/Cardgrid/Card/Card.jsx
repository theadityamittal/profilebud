import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function Card( { title, color } ) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <Grid container className={classes.cardcontainer}>
                <Grid item className={classes.carddata} xs={12}>
                    <div className={classes.header}>
                        <div className={classes.circle}><i className={`fas fa-circle fa-3x ${classes.dot}`} style={{color: color}}></i></div>
                        <Typography className={classes.title}>{title}</Typography>
                    </div>
                    <Typography className={classes.text}>{"Lorem ipsum something is here. Something else will come here. Oh yes it will come"}</Typography>
                </Grid>
                <Grid item className={classes.buttonGrid} xs={12}>
                    <Button className={classes.button} style={{color: color}}>
                        Sample Data
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card
