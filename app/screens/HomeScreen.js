import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Badges from '../components/Badges';
import GamesPlayed from '../components/GamesPlayed';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Games Played" component={GamesPlayed} />
        <Tab.Screen name="Badges" component={Badges} />
      </Tab.Navigator>
  );
}
