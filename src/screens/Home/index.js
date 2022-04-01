import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground,
    Dimensions
} from 'react-native';
import Header from '../../components/Header';
import { theme } from '../constants';
import { styles } from './styles'

const height = Dimensions.get('window').height

export default Home = (props) => {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.rowCont}>
                    <Header />
            </View>
            <ImageBackground style={styles.mainCont} source={require('../../assets/images/logo-react.png')}>
                <View style={styles.rowCont}>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'red'}]}
                 onPress={()=> alert('Ya estas en home!')}>
                    <Text style={styles.tittle}>
                        Home
                    </Text>
                </Pressable>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'blue'}]}
                 onPress={()=>props.navigation.navigate('Perfil')}>
                    <Text style={styles.tittle}>
                        Perfil
                    </Text>
                </Pressable>
                </View>
                <View style={styles.rowCont}>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'gray'}]}
                 onPress={()=>props.navigation.navigate('Lista')}>
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

