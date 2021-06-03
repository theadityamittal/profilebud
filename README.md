# ProfileBud

This project was bootstrapped with [Create React App] and [Material-UI] for Internship Test at Profile Bud.

## Components

The Project consists of

### Navbar
Contains the company logo and navigation links including the checkout cart option

### Header
Briefly explains the work done at ProfileBud to give an overview

### Card Grid
Explains the various functions and features available to users

### Card 
Individual card components of the Card Grid

### Subscription
Consists of the pricing details for purchasing a subscription

## Working

The different components are designed as

### Navbar
The logo and the links are two different grid items of the container grid and the links are positioned using `flex-end` property

### Header 
It is simply designed using `flex-direction: column` and `align-items: center` to give a perfect look

### Card Grid
The static data stored in an array of the cards is mapped over to create four similar styled but seperate cards and `Grid` of Material-UI is used to create a grid

### Subscription
Similarly `Grid` is used here too to easily provide breakpoints for responsivity and the `input` is styled to give it a `Neuomorphism` look