import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
}))