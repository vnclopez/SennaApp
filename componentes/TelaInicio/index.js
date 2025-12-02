import { View, Text, ImageBackground, Image } from "react-native";

import fundo from '../../assets/fundo.jpg';
import fotoCapa from '../../assets/foto-capa.jpg';

export default function TelaInicio() {
    return (
        <ImageBackground source={fundo} style={{ flex: 1 }}>

            <Image source={fotoCapa} />

            <View>
                <Text>Ayrton Senna</Text>

                <Text>
                    Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.
                </Text>
            </View>

        </ImageBackground>
    );
}