import React, {Component, useCallback} from 'react';
import Home from "../screens/Home";
import Mapa from "../screens/Mapa";
import Profile from "../screens/Profile";
import List from "../screens/List";
import { Icon } from 'react-native-elements';
import {theme} from '../screens/constants'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const { colors } = theme

export default function Tabs() {
  return (
    <Tab.Navigator
    headerMode="none" 
    activeColor= {colors.active}//'#f5c511' //'rgb(41,34,97)',
    inactiveColor= {colors.inactive}
    barStyle={{
    backgroundColor: colors.bar
    }}>
      <Tab.Screen name="Casa" component={Home}
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
        ),
        }} />
      <Tab.Screen name="Mapa" component={Mapa} 
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
        ),
        }}/>
      <Tab.Screen name="Perfil" component={Profile} 
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name={'user'} type="font-awesome-5" size={20} color={color} />
        ),
        }}/>
      <Tab.Screen name="Lista" component={List} 
      options={{
        tabBarIcon: ({ color }) => (
        <Icon name={'table'} type="font-awesome-5" size={20} color={color} />
        ),
        }}/>
    </Tab.Navigator>
  );
}