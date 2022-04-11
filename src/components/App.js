import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useCallback, useEffect } from 'react';
import {Provider} from 'react-redux';
import { store } from '../store';
import AppStack from '../routes/AppStack';
import { hasLocationPermission } from '../LocationPermission';


export default App = () => {

    useEffect(()=>{
        hasLocationPermission()
    }, [])

    return(
    <Provider store={store}>  
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    </Provider>    
    )
}