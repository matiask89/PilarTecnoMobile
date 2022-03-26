import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable
} from 'react-native';
import { styles } from './styles'

export default Home = () => {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.mainCont}>
                <View style={styles.rowCont}>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'red'}]}
                 onPress={()=>alert('boton 1')}>
                    <Text style={styles.tittle}>
                        boton 1
                    </Text>
                </Pressable>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'blue'}]}
                 onPress={()=>alert('boton 2')}>
                    <Text style={styles.tittle}>
                        boton 2
                    </Text>
                </Pressable>
                </View>
                <View style={styles.rowCont}>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'gray'}]}
                 onPress={()=>alert('boton 3')}>
                    <Text style={styles.tittle}>
                        boton 3
                    </Text>
                </Pressable>
                <Pressable style={[styles.buttonCont, {backgroundColor: 'green'}]}
                 onPress={()=>alert('boton 4')}>
                    <Text style={styles.tittle}>
                        boton 4
                    </Text>
                </Pressable>
                </View>
            </View>         
        </SafeAreaView>
    )
}