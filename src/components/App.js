import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useCallback } from 'react';
import {Provider} from 'react-redux';
import { store } from '../store';
import { 
    View, 
    Text
} from 'react-native';
import AppStack from '../routes/AppStack';


export default App = () => {

    return(
    <Provider store={store}>  
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    </Provider>    
    )
}