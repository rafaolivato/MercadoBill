import React, { useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';
import ED from 'react-native-vector-icons/AntDesign';
import { NotificationManager } from './src/Notification';
import { Component } from 'react';
import { Button } from 'react-native-paper';


const notificador = NotificationManager
const Stack = createNativeStackNavigator();

export class NotificationService extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    notificador.configure();
    notificador.createChannel();
    notificador.buildNotificationSchedule();
    notificador.buildNotificationSchedule2();
  }
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function CervejaScreen() {
  return (
    <View style={{ margin: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>DETALHES DO PRODUTO</Text>
      <Text style={{ fontSize: 15, padding: 10, color: 'black', textAlign: 'justify' }}>Levando em conta que a cerveja puro malte é aquela que quando produzida não leva cereais não maltados e nem adjuntos em sua receita, ela facilmente se enquadra também dentro da famosa Lei da Pureza Alemã, a qual diz que a bebida deve ser feita somente com os quatro ingredientes principais: água, malte, lúpulo.
      </Text>
    </View>
  );
}

function RefrigeranteScreen() {
  return (
    <View style={{ margin: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>DETALHES DO PRODUTO</Text>
      <Text style={{ fontSize: 15, color: 'black', textAlign: 'justify' }}>Resultado de imagem para ingrediente do refrigerante
        Ingredientes: Água gaseificada,açúcar,semente de guaraná,aroma natural de guaraná,acidulante:ácido cítrico;conservadores:sorbato de potássio e benzoato de sódio;corante;caramelo tipo IV. </Text>
    </View>
  );
}

function BolachaScreen() {
  return (
    <View style={{ margin: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>DETALHES DO PRODUTO</Text>
      <Text style={{ fontSize: 15, padding: 10, color: 'black', textAlign: 'justify' }}>
        O Biscoito Sem Açúcar Fibra Gullón 170g são bolachas sem açúcares, com alto teor de fibras e óleo de girassol alto oleico.

        Ingredientes: Farinha integral de trigo, edulcorante (maltitol), óleo vegetal (girassol alto oleico), fibra alimentar vegetal, fibra d'ervilha, gaseificantes (carbonato ácido de sodio e carbonato ácido de amonio), emulgente (lecitina de soja), sal, aromas. Pode contener traços de leite.
      </Text>

    </View>
  );
}

function ArrozScreen() {
  return (
    <View style={{ margin: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: 'black' }}>Informação Nutricional</Text>
      <Text style={{ fontSize: 15, padding: 10, color: 'black', textAlign: 'justify' }}>Valor nutricional- 100 g de arroz branco cozido
        Porção 	% Valor diário
        Valor energético 	32 Kcal 	1,6%
        Carboidrato 	7,03 g 	2,34%
        Proteína 	0,63 g 	0,83%
        Gorduras totais 	0,5 g 	0,09%
        Gorduras saturadas 	0,5 g 	0,23%
        Sódio 	0,25 mg 	0,01%
        Fibra alimentar 	0,4 g 	1,6%</Text>
    </View>
  );
}



function HomeScreen({ navigation }) {
  return (
    <ScrollView>

      <View style={{ flexDirection: 'row' }}>


      </View>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 25, padding: 10, color: 'dodgerblue' }}> Bem vindo ao</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Image style={{ width: 180, height: 180, justifyContent: 'center', alignItems: 'center' }} source={require('./src/imagens/logo.png')}></Image>
        </View>
        <View>


        </View>

        <Text style={{ textAlign: 'center', color: 'black', fontSize: 20, padding: 15, color: 'dodgerblue', fontWeight: 'bold' }}>Oportunidades da semana </Text>
        <Text></Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <View>
            <Image style={{ width: 120, height: 120, justifyContent: 'center', alignItems: 'center' }} source={require('./src/imagens/rice.png')}></Image>

            <Text style={{ textAlign: 'center', color: 'black', fontSize: 15, padding: 6, }}>PROMOÇÃO</Text>
          </View>
          <View>
            <Image style={{ width: 120, height: 120, justifyContent: 'center', alignItems: 'center' }} source={require('./src/imagens/picanha.png')}></Image>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 15, padding: 6, }}>OFERTA</Text>
          </View>
          <View>
            <Image style={{ width: 120, height: 120, justifyContent: 'center', alignItems: 'center' }} source={require('./src/imagens/beer.png')}></Image>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 15, padding: 6, }}>DESTAQUE</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>


        </View>

      </View>
    </ScrollView>

  );
}

function CategoriaScreen({ navigation }) {
  return (
    <ScrollView>
      <Text style={{ fontWeight: 'bold', fontSize: 25, margin: 10, color: 'dodgerblue' }}>Mercado do Bill</Text>
      <View>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, padding: 20 }}> Mercearia</Text>

        <View style={{ flexDirection: 'row', alignItems: 'space-around', justifyContent: 'space-around' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Arroz')}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 100, height: 150 }} source={require('./src/imagens/rice.png')}></Image>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>Arroz 1 kg</Text>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>R$ 8,99</Text>
            </View>
            <View>
            <Button buttonColor ="dodgerblue" icon="cart-outline" mode='contained' onPress={() => { }} >
              Comprar
            </Button>
          </View>
          </TouchableOpacity>
          

          <TouchableOpacity
            onPress={() => navigation.navigate('Bolacha')}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 100, height: 150 }} source={require('./src/imagens/cookie.png')}></Image>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>Bolacha</Text>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>R$ 1,59</Text>
            </View>
            <View>
            <Button buttonColor ="dodgerblue" icon="cart-outline" mode='contained' onPress={() => { }} >
              Comprar
            </Button>
          </View>
          </TouchableOpacity>
        </View>


        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, padding: 20 }}> Bebidas</Text>

        <View style={{ flexDirection: 'row', alignItems: 'space-around', justifyContent: 'space-around' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cerveja')}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 100, height: 150 }} source={require('./src/imagens/beer.png')}></Image>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>Cerveja</Text>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>R$ 3,90</Text>
            </View>
            <View>
            <Button buttonColor ="dodgerblue" icon="cart-outline" mode='contained' onPress={() => { }} >
              Comprar
            </Button>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Refrigerante')}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
              <Image style={{ width: 100, height: 150 }} source={require('./src/imagens/refri.png')}></Image>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>Refrigerante</Text>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>R$ 2,99</Text>
            </View>
            <View>
            <Button buttonColor ="dodgerblue" icon="cart-outline" mode='contained' onPress={() => { }} >
              Comprar
            </Button>
          </View>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, padding: 20 }}> Produtos de limpeza</Text>

        <View style={{ flexDirection: 'row', alignItems: 'space-around', justifyContent: 'space-around' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cerveja')}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 100, height: 150 }} source={require('./src/imagens/detergente.png')}></Image>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>Detergente Bão</Text>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>R$ 1,79</Text>
            </View>
            <View>
            <Button buttonColor ="dodgerblue" icon="cart-outline" mode='contained' onPress={() => { }} >
              Comprar
            </Button>
          </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Refrigerante')}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
              <Image style={{ width: 100, height: 150 }} source={require('./src/imagens/agua.png')}></Image>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>Água Sanitária</Text>
              <Text style={{ color: 'black', fontSize: 15, padding: 2 }}>R$ 3,99</Text>
            </View>
            <View>
            <Button buttonColor ="dodgerblue" icon="cart-outline" mode='contained' onPress={() => { }} >
              Comprar
            </Button>
          </View>
          </TouchableOpacity>
        </View>
      </View >
    </ScrollView>

  );
}

function SobreScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, margin: 10, color: 'dodgerblue' }}>Mercado do Bill</Text>
          <Image style={{ width: 150, height: 150, justifyContent: 'center', alignItems: 'center' }} source={require('./src/imagens/logo.png')}></Image>

          <Text style={{ color: 'black', margin: 10, padding: 5, textAlign: 'justify' }}>
            Temos os mais diversificados produtos do mercado, tudo para sua casa  com preço baixo, promoções diárias e entregamos na sua casa.
            Conte conosco para ajudá-lo no seu dia-a-dia.
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>


        </View>
        <Text style={{ color: 'black', textAlign: 'center', padding: 2 }}>Rua: Alana Patrícia Oliveira, 325</Text>
        <Text style={{ color: 'black', textAlign: 'center', padding: 2 }}> Vila Mariana - SP</Text>

        <Text style={{ color: 'black', textAlign: 'center', padding: 2 }}>Horário de funcionamento</Text>
        <Text style={{ color: 'black', textAlign: 'center', padding: 2 }}>De segunda a segunda das 7:00 as 22:00 hs</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>

        </View>
      </View>
    </ScrollView>
  );
}

function SettingsScreen({ navigation }) {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={{ fontType: 'comicsans', fontWeight: 'bold', fontSize: 25, margin: 10, color: 'dodgerblue' }}>Mercado do Bill</Text>
      </View>

      <View>
        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', padding: 20 }}>Cartões</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Image style={{ width: 300, height: 300 }} source={require('./src/imagens/cartoes.png')}></Image>

      </View>

    </View>

  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>

      <HomeStack.Screen name="Início" component={HomeScreen} />

    </HomeStack.Navigator>
  );
}

function CategoriaStackScreen() {
  return (

    <HomeStack.Navigator>
      <HomeStack.Screen name="Ofertas" component={CategoriaScreen} />

      <HomeStack.Screen name="Cerveja" component={CervejaScreen} />
      <HomeStack.Screen name="Bolacha" component={BolachaScreen} />
      <HomeStack.Screen name="Arroz" component={ArrozScreen} />
      <HomeStack.Screen name="Refrigerante" component={RefrigeranteScreen} />

    </HomeStack.Navigator>
  );
}

function SobreStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Da nossa família para a sua" component={SobreScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Cartões, pix e boletos" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  useEffect(() => {
    notificador.configure();
    notificador.createChannel();
    notificador.buildNotificationSchedule();
    notificador.buildNotificationSchedule2();

  });



  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen
          name="Home"

          options={{
            tabBarIcon: ({ color, size }) =>
              <MI name='home-circle' color={color} size={size} />
          }}
        >
          {
            ({ navigation }) => {
              notificador.setNavegador(navigation)
              return (
                <HomeStackScreen />
              )
            }
          }

        </Tab.Screen>

        <Tab.Screen
          name="Produtos"
          component={CategoriaStackScreen}
          options={{
            tabBarIcon: ({ color, size }) =>
              <MI name='cart-check' color={color} size={size} />

          }}
        />

        <Tab.Screen
          name="Sobre"
          component={SobreStackScreen}
          options={{
            tabBarIcon: ({ color, size }) =>
              <MI name='emoticon-outline' color={color} size={size} />
          }}
        />

        <Tab.Screen
          name="Cartões"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: ({ color, size }) =>
              <ED name='creditcard' color={color} size={size} />
          }}
        />


      </Tab.Navigator>

    </NavigationContainer>
  );
}