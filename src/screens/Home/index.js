import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground
} from 'react-native';
import { styles } from './styles'

export default Home = (props) => {

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainCont} source={require('../../assets/images/logo-react.png')}>
                <View style={styles.rowCont}>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'red'}]}
                 onPress={()=> alert('Ya estas en home!')}>
                    <Text style={styles.tittle}>
                        Home
                    </Text>
                </Pressable>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'blue'}]}
                 onPress={()=>props.navigation.navigate('Profile')}>
                    <Text style={styles.tittle}>
                        Perfil
                    </Text>
                </Pressable>
                </View>
                <View style={styles.rowCont}>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'gray'}]}
                 onPress={()=>props.navigation.navigate('List')}>
                    <Text style={styles.tittle}>
                        Lista
                    </Text>
                </Pressable>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'green'}]}
                 onPress={()=>props.navigation.navigate('Mapa')}>
                    <Text style={styles.tittle}>
                        Mapa
                    </Text>
                </Pressable>
                </View>
            </ImageBackground>         
        </SafeAreaView>
    )
}