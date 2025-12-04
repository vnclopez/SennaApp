import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import corrida1 from '../../assets/corrida1.jpg';
import vitoria1 from '../../assets/vitoria1.jpg';
import vitoria2 from '../../assets/vitoria2.jpg';
import vitoria3 from '../../assets/vitoria3.jpg';

export default function TelaVitorias() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <ImageBackground source={corrida1} style={{ flex: 1 }}>

                <View>

                    <Text>Senna em Números</Text>

                    <Text>
                        Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou
                        41 Grandes Prêmios e 65 pole positions.
                    </Text>

                    <View>
                        <FontAwesome5 name="trophy" size={20} color="gold" />
                        <Text>161</Text>
                        <Text>gps disputados</Text>
                    </View>

                    <View>
                        <FontAwesome5 name="trophy" size={20} color="gold" />
                        <Text>65</Text>
                        <Text>pole positions</Text>
                    </View>

                    <View>
                        <FontAwesome5 name="trophy" size={20} color="gold" />
                        <Text>41</Text>
                        <Text>vitórias</Text>
                    </View>

                    <View>
                        <FontAwesome5 name="trophy" size={20} color="gold" />
                        <Text>3X</Text>
                        <Text>campeão mundial</Text>
                    </View>

                </View>

                <View>
                    <Text>campeonato mundial - 1988</Text>
                    <Image source={vitoria1} />
                </View>

                <View>
                    <Text>campeonato mundial - 1990</Text>
                    <Image source={vitoria2} />
                </View>

                <View>
                    <Text>campeonato mundial - 1991</Text>
                    <Image source={vitoria3} />
                </View>

            </ImageBackground>

        </ScrollView>
    );
}