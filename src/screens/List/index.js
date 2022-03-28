import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground
} from 'react-native';
import { styles } from './styles'

export default List = () => {

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainCont} source={require('../../assets/images/logo-react.png')}>
                <View style={styles.rowCont}>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'red'}]}>
                    <Text style={styles.tittle}>
                        vista lista
                    </Text>
                </Pressable>
                </View>
            </ImageBackground>         
        </SafeAreaView>
    )
}