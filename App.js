import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import TelaInicio from "./componentes/TelaInicio";
import TelaSobre from "./componentes/TelaSobre";
import TelaVitorias from "./componentes/TelaVitorias";

const Abas = createBottomTabNavigator();

const scrOptions = {
  headerStyle: {
    backgroundColor: '#eecb01'
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#000'
  },
  tabBarActiveTintColor: '#ba1718',
  tabBarInactiveTintColor: '#000',
  tabBarStyle: {
    backgroundColor: '#eecb01'
  },
  tabBarActiveBackgroundColor: '#fff'
};

const home = ({ color }) => (<Entypo name="home" size={20} color={color} />);
const questionCircle = ({ color }) => (<FontAwesome5 name="question-circle" size={20} color={color} />);
const trophy = ({ color }) => (<FontAwesome5 name="trophy" size={20} color={color} />);

export default function App() {
  return (
    <NavigationContainer>

      <Abas.Navigator screenOptions={scrOptions}>

        <Abas.Screen name="Início" component={TelaInicio} options={{ tabBarIcon: home }} />

        <Abas.Screen name="Sobre" component={TelaSobre} options={{ tabBarIcon: questionCircle }} />

        <Abas.Screen name="Vitórias" component={TelaVitorias} options={{ tabBarIcon: trophy }} />

      </Abas.Navigator>

    </NavigationContainer>
  );
}
