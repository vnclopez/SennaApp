import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    secaoNumeros: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 20,
        width: 340,
        marginBottom: 50
    },
    tituloNumeros: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    paragrafoNumeros: {
        color: '#a6a6a6',
        textAlign: 'center',
        marginBottom: 20
    },
    itemNumeros: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    numeroDestaque: {
        color: '#eecb01',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 5
    },
    textoNumeroDestaque: {
        color: '#a6a6a6',
        fontSize: 16
    },
    cardVitoria: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 20
    },
    tituloVitoria: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'capitalize',
        padding: 15
    },
    imgVitoria: {
        width: 300,
        height: 200
    }
});

export default estilo;