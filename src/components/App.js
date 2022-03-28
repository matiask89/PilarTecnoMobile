import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useCallback } from 'react';
import { 
    View, 
    Text
} from 'react-native';
import AppStack from '../routes/AppStack';

export default App = () => {

    return(
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}