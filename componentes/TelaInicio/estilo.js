import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    img: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 3,
        borderColor: '#202020',
        marginBottom: 50
    },
    box: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 20,
        borderRadius: 20,
        width: 340
    },
    titulo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    descricao: {
        color: '#a6a6a6',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default estilo;