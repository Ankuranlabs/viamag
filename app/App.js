import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LeaderBoardScreen from './screens/LeaderBoardScreen';
import LeaguesScreen from './screens/LeaguesScreen';
import ProfileScreen from './screens/ProfileScreen';
import ResearchScreen from './screens/ResearchScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Leagues" component={LeaguesScreen} />
        <Tab.Screen name="Research" component={ResearchScreen} />
        <Tab.Screen name="Leaderboard" component={LeaderBoardScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
