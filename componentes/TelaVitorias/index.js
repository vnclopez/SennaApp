import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import estilo from "./estilo";

import corrida1 from '../../assets/corrida1.jpg';
import vitoria1 from '../../assets/vitoria1.jpg';
import vitoria2 from '../../assets/vitoria2.jpg';
import vitoria3 from '../../assets/vitoria3.jpg';

export default function TelaVitorias() {
    return (
        <ScrollView>
            <ImageBackground source={corrida1} style={estilo.container} blurRadius={3}>

                <View style={estilo.secaoNumeros}>

                    <Text style={estilo.tituloNumeros}>Senna em Números</Text>

                    <Text style={estilo.paragrafoNumeros}>
                        Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou
                        41 Grandes Prêmios e 65 pole positions.
                    </Text>

                    <View style={estilo.itemNumeros}>

                        <FontAwesome5 name="trophy" size={25} color="#ceb105" />

                        <Text style={estilo.numeroDestaque}>161</Text>

                        <Text style={estilo.textoNumeroDestaque}>GPS DISPUTADOS</Text>
                    </View>

                    <View style={estilo.itemNumeros}>

                        <FontAwesome5 name="trophy" size={25} color="#ceb105" />

                        <Text style={estilo.numeroDestaque}>65</Text>

                        <Text style={estilo.textoNumeroDestaque}>POLE POSITIONS</Text>

                    </View>

                    <View style={estilo.itemNumeros}>

                        <FontAwesome5 name="trophy" size={25} color="#ceb105" />

                        <Text style={estilo.numeroDestaque}>41</Text>

                        <Text style={estilo.textoNumeroDestaque}>VITÓRIAS</Text>

                    </View>

                    <View style={estilo.itemNumeros}>

                        <FontAwesome5 name="trophy" size={25} color="#ceb105" />

                        <Text style={estilo.numeroDestaque}>3X</Text>

                        <Text style={estilo.textoNumeroDestaque}>CAMPEÃO MUNDIAL</Text>

                    </View>

                </View>

                <View style={estilo.cardVitoria}>

                    <Text style={estilo.tituloVitoria}>campeonato mundial - 1988</Text>

                    <Image source={vitoria1} style={estilo.imgVitoria} />

                </View>

                <View style={estilo.cardVitoria}>

                    <Text style={estilo.tituloVitoria}>campeonato mundial - 1990</Text>

                    <Image source={vitoria2} style={estilo.imgVitoria} />

                </View>

                <View style={estilo.cardVitoria}>

                    <Text style={estilo.tituloVitoria}>campeonato mundial - 1991</Text>

                    <Image source={vitoria3} style={estilo.imgVitoria} />

                </View>

            </ImageBackground>

        </ScrollView>
    );
}
