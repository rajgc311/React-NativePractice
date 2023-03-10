import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import Card from './components/Card';
import FancyCard from './components/FancyCard';
import GameApp from './components/Game/GameApp';
import Home from './components/Home';
import LinkButtonWithTopacity from './components/LinkButtonWithTopacity';
import QuoteGenerator from './components/QuoteGenerator';
import Rapp from './components/Restaurant/Rapp';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Card' component={Card}/>
      <Stack.Screen name='FancyCard' component={FancyCard}/>
      <Stack.Screen name='LinkButtonWithTopacity' component={LinkButtonWithTopacity}/>
      <Stack.Screen name='Rapp' component={Rapp}/>
      <Stack.Screen name='QuoteGenerator' component={QuoteGenerator}/>
      <Stack.Screen name='GameApp' component={GameApp}/>




    
        </Stack.Navigator>

    </NavigationContainer>

    //====================================================================================================
    // <SafeAreaView>
    // <View style={styles.container}>
    //   {/* <Card/>
    //   <FancyCard/>
    //   <LinkButtonWithTopacity/> */}
    
    // </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
