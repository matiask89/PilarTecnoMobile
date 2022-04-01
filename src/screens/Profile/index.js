import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground
} from 'react-native';
import { styles } from './styles'
import { Button, Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {actions} from '../../store/actions'
import { useDispatch } from 'react-redux';
import UserAvatar from 'react-native-user-avatar';


export default Profile = (props) => {

    const dispatch = useDispatch()

    const _signOut = async () => {
        try {
            await AsyncStorage.delItem('user',JSON.stringify(false))
        } catch (e) {
            
        }
        dispatch(actions.user.setUser(false));
    }

    return(
        <SafeAreaView style={styles.mainCont}>
            <Text style={styles.tittle}>
                Perfil
            </Text>
            <View>
                <UserAvatar size={100} name="Avishay Bar" src="https://dummyimage.com/100x100/000/fff&text=MK" />
            </View>
            <Text style={styles.text}>
                Nombre: Matias
            </Text>
            <Text style={styles.text}>
                Email: matias@mail.com
            </Text>

            <View style={styles.rowCont}>
                <Button
                    title='SALIR'
                    containerStyle={{width: '90%'}}
                    onPress={()=> _signOut()}
                />             
            </View>        
        </SafeAreaView>
    )
}