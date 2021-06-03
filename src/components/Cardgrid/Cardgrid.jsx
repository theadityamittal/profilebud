import { Grid } from '@material-ui/core'
import React from 'react'
import Card from './Card/Card'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardgrid: {
        width: '80%',
        margin: 'auto'        
    }
}), {index: 1})

const cards = [
    {
        title: "Followers / Following of @any_user",
        color: "#FF4D08"        
    }, 
    {
        title: "Liker / Commenter of any post",
        color: "#0093FF"        
    }, 
    {
        title: "People Posting Specific #Hashtags",
        color: "#00FF92"        
    }, 
    {
        title: "People Posting at Sepcific Locations",
        color: "#830AFF"        
    }
]

function Cardgrid() {
    const classes = useStyles();
    return (
        <Grid className={classes.cardgrid} container spacing={5}>
            {cards.map((card) => (
                <Grid item xs={12} md={6}>
                    <Card title={card.title} color={card.color}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Cardgrid
