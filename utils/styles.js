import { makeStyles } from "@material-ui/core";






const useStyle = makeStyles({
    brand: {
        color: 'white',
        fontWeight: "bold",
        fontSize: '1.5rem'

    },
    grow: {
        flexGrow: 1
    }
    ,
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#FFFFFF',
            marginLeft: 10,
        }
    },
    main: {
        minHeight: "80vh"
    },
    footer: {
        textAlign: 'center'
    },
    cardButton: {
        color: "red"
    },
    section: {
        marginTop: 10,
        marginBottom: 10
    }

})

export default useStyle;
