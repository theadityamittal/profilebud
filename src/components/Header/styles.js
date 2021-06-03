import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60vh',
        width: '100%',  
        [theme.breakpoints.down('md')]: {
            height: '70vh'
        }      
    },
    headtext: {
        fontFamily: 'Montserrat',
        color: '#FFF',
        fontWeight: '800',
        fontSize: '450%',
        textAlign: 'center',
        [theme.breakpoints.down('lg')]: {
            fontSize: '370%',
        }
    },
    subtext: {
        fontFamily: 'Montserrat',
        color: '#646464',
        fontWeight: '600',
        textAlign: 'center',
        paddingLeft: '15%',
        paddingRight: '15%',
        [theme.breakpoints.down('lg')]: {
            fontSize: '250%',
        }
    },
    button: {
        fontFamily: 'Montserrat',
        color: '#FFB027',
        fontSize: '250%',
        fontWeight: '800',
        textAlign: 'center',    
        padding: '2%',
        paddingLeft: '6%',
        paddingRight: '6%',
        borderRadius: '90px',
        background: '#1A1D21',
        boxShadow:  '21px 21px 42px #0e0f11, -21px -21px 42px #262b31',
        '&:hover': {
            boxShadow:  '26px 26px 52px #0a0c0d, -26px -26px 52px #2a2e35',
            background: '#1A1D21',
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '200%',
        }
    }
}))