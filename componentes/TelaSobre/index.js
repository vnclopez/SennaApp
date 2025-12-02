import { View, Text, Image, ScrollView } from "react-native";
import fotoCapa from '../../assets/foto-capa.jpg';
import reiChuva from '../../assets/rei-da-chuva.png';
import reiMonaco from '../../assets/rei-de-monaco.png';
import silvastone from '../../assets/silvastone.png';
import preparacao from '../../assets/preparacao.png';

import estilo from "./estilo";

export default function TelaSobre() {
    return (
        <View style={estilo.container}>

            <View style={estilo.secaoSuperior}>
                <Text style={estilo.tituloSuperior}>Ayrton Senna</Text>

                <Image source={fotoCapa} style={estilo.imgSuperior} />

                <Text style={estilo.paragrafoSuperior}>
                    No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os
                    tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou
                    status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável
                    por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.
                </Text>
            </View>

            <ScrollView style={estilo.secaoCards}>

                <View style={estilo.reiChuva}>

                    <Image source={reiChuva} style={estilo.img} />

                    <Text style={estilo.tituloReiChuva}>Rei da chuva</Text>

                    <Text style={estilo.paragrafoReiChuva}>
                        Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra
                        e persistência.
                    </Text>

                </View>

                <View style={estilo.reiMonaco}>

                    <Image source={reiMonaco} style={estilo.imgReiMonaco} />

                    <Text style={estilo.tituloReiMonaco}>Rei de Mônaco</Text>

                    <Text style={estilo.paragrafoReiMonaco}>
                        Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.
                    </Text>

                </View>

                <View style={estilo.silvastone}>

                    <Image source={silvastone} style={estilo.imgSilvastone} />

                    <Text style={estilo.tituloSilvastone}>Silvastone</Text>

                    <Text style={estilo.paragrafoSilvastone}>
                        Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de
                        'Silvastone' pela imprensa inglesa.
                    </Text>

                </View>

                <View style={estilo.preparacao}>

                    <Image source={preparacao} style={estilo.imgPreparacao} />

                    <Text style={estilo.tituloPreparacao}>Preparação</Text>

                    <Text style={estilo.paragrafoPreparacao}>
                        Para vencer corridas e campeonatos, o piloto precisava ter uma preparação física
                        de atleta.
                    </Text>

                </View>

            </ScrollView>

        </View>
    );
}