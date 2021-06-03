import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    navbar: {
        width: '94%',
        height: 'auto',
        padding: '3%',
        paddingTop: '2%'
    },
    navgrid: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        height: '130px',
        fontFamily: 'Montserrat'    
    },
    links: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    link: {
        fontFamily: 'Montserrat',  
        marginRight: '10%',
        fontWeight: '600',
        color: '#FFB027',
        fontSize: '33px'
    },
    checkout: {
        display: 'flex',
        height: '130px',
        width: '130px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        boxShadow:  '10px 10px 21px #141619, -10px -10px 21px #212429',
        '&:hover': {
            boxShadow: '16px 16px 32px #0a0c0d, -16px -16px 32px #2a2e35'
        }
    },
    carticon: {
        height: '50px'
    }
}))