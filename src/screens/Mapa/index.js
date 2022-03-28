import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground
} from 'react-native';
import { mapastyles } from './style'

export default Mapa = () => {

    return(
        <SafeAreaView style={mapastyles.container}>
            <ImageBackground style={mapastyles.mainCont} source={require('../../assets/images/logo-react.png')}>
                <View style={mapastyles.rowCont}>
                <Pressable style={[mapastyles.buttonCont, {backgroundColor: 'red'}]}>
                    <Text style={mapastyles.tittle}>
                        vista mapa
                    </Text>
                </Pressable>
                </View>
            </ImageBackground>         
        </SafeAreaView>
    )
}