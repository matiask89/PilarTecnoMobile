import React, {Component, useCallback} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Mapa from '../screens/Mapa';
import Profile from '../screens/Profile'

const Stack = createStackNavigator();

export default AppStack = (props) => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
