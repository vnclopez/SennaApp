import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    secaoSuperior: {
        padding: 20
    },
    tituloSuperior: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    imgSuperior: {
        height: 200,
        width: '100%',
        borderRadius: 5,
        marginBottom: 10
    },
    paragrafoSuperior: {
        fontWeight: 'bold',
        color: '#757575',
        marginBottom: 20
    },
    card: {
        flexDirection: 'row',
        marginBottom: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#d5d5d5',
        borderBottomColor: '#d5d5d5'
    },
    imgCard: {
        width: 100,
        height: 100
    },
    textosCard: {
        padding: 10,
        flex: 1
    },
    tituloCard:{
        fontSize: 18,
        fontWeight: 'bold',
    }

});

export default estilo;