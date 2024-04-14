import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons'

import Home from './component/Home';
import About from './component/About';
import Search from './component/Search';
import Result from './component/Result';
import style from './style';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function HomeScreen() {
  return (
    <View style={style.container}>
      <Home />
    </View>
  )
}

function AboutScreen({route}) {
  const {message} = route.params
  return (
    <View style={style.container}>
      <About message={message} />
    </View>
  )
}

function ThirdScreen({navigation}){
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchScreen} options={{ title : "Recherche" }} />
      <Stack.Screen name="Result" component={ResultScreen} options={{ title : "Résultats" }} />
    </Stack.Navigator>
  )
}

function SearchScreen({route, navigation}){
  return (
    <View style={style.container}>
      <Search navigation={navigation} route={route} />
    </View>
  )
}

function ResultScreen({route, navigation}){
  return (
    <View style={style.container}>
      <Result navigation={navigation} route={route} />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon : ({focused, color, size}) => {

            let name = 'asterisk'

            if(route.name === 'Home')
              name = 'home'
            else if (route.name === 'About')
              name = 'question'

            return <FontAwesome name={name} size={20}
            color={color} />
          },
          tobBarActiveTinColor : '#ba0d7b',
          tobBarInactiveTinColor : '#333333'
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} 
          initialParams={{message : 'Allons-y'}}
        />
        <Tab.Screen name="Third" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

