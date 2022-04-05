import React, {Component, useCallback} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import Mapa from '../screens/Mapa';
import List from '../screens/List';
import ListDetail from '../screens/ListDetail';
import Login from '../screens/Auth/SignIn';
import Profile from '../screens/Profile';
import {useSelector} from 'react-redux'


const Stack = createStackNavigator();

export default AppStack = (props) => {
    const user = useSelector(state=>state.user.user)

    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        {
          user?
          <Stack.Screen name="AppStack" component={Tabs} />
          :
          <Stack.Screen name="Login" component={Login} />
        }
        
        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ListDetail" component={ListDetail} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    )}