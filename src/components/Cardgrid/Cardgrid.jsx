import { Grid } from '@material-ui/core'
import React from 'react'
import Card from './Card/Card'
import useStyles from './styles'

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
                <Grid item xs={12} lg={6}>
                    <Card title={card.title} color={card.color}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Cardgrid
