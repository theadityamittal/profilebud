import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60vh',
        width: '100%',
        
    },
    headtext: {
        fontFamily: 'Montserrat',
        color: '#FFF',
        fontWeight: '800',
        fontSize: '450%',
        textAlign: 'center'
    },
    subtext: {
        fontFamily: 'Montserrat',
        color: '#646464',
        fontWeight: '600',
        textAlign: 'center',
        paddingLeft: '15%',
        paddingRight: '15%'
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
        boxShadow:  '21px 21px 42px #0e0f11, -21px -21px 42px #262b31'
    }
}))