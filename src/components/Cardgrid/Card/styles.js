import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card: {
        width: '74%',
        height: '600px',
        margin: '5% auto',
        padding: '8%',
        paddingBottom: '3%',
        backgroundColor: '#1A1D21',
        borderRadius: '37px',
        boxShadow:  '16px 16px 27px #0e1012, -16px -16px 27px #262a30',
        '&:hover': {
            background: 'linear-gradient(145deg, #171a1e, #1c1f23)',
        },
        [theme.breakpoints.down('lg')]: {
            height: '500px'
        }
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
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    circle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        background: '#1A1D21',
        boxShadow:  'inset 17px 17px 42px #0a0c0d, inset -17px -17px 42px #2a2e35',
        marginRight: '5%',
        [theme.breakpoints.down('lg')]: {
            height: '80px',
            width: '80px',
        }
    },
    dot: {
        height: 'fit-content',
        width: 'fit-content',              
    },
    title: {
        color: '#646464',
        fontWeight: '600',
        fontSize: '300%',
        fontFamily: 'Montserrat',
        marginBottom: '20px',
        [theme.breakpoints.down('lg')]: {
            fontSize: '200%',
        }
    },
    text: {
        color: '#646464',
        fontWeight: '300',
        fontFamily: 'Montserrat',
        fontSize: '200%',
        [theme.breakpoints.down('lg')]: {
            fontSize: '170%',
        }
    },
    buttonGrid:{
        height: '40%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    },
    button: {
        width: 'fit-content',
        margin: 'auto',
        padding: '5%',
        paddingLeft: '10%',
        paddingRight: '10%',
        fontFamily: 'Montserrat',
        fontSize: '220%',
        fontWeight: '800',
        borderRadius: '88px',
        boxShadow:  '16px 16px 39px #0f1012, -16px -16px 39px #252a30',
        '&:hover': {
            boxShadow:  '24px 24px 48px #0a0c0d, -24px -24px 48px #2a2e35',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '180%',
        }
    }
}))