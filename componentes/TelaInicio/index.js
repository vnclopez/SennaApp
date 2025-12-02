import { View, Text, ImageBackground, Image } from "react-native";
import fundo from '../../assets/fundo.jpg';
import fotoCapa from '../../assets/foto-capa.jpg';
import estilo from './estilo';

export default function TelaInicio() {
    return (
        <ImageBackground source={fundo} style={estilo.fundo} blurRadius={5}>

            <Image source={fotoCapa} style={estilo.img} />

            <View style={estilo.box}>
                <Text style={estilo.titulo}>Ayrton Senna</Text>

                <Text style={estilo.descricao}>
                    Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.
                </Text>
            </View>

        </ImageBackground>
    );
}