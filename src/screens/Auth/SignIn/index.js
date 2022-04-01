import React, {useState } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground
} from 'react-native';
import { SigninStyles } from './style'
import { Input, Icon, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {actions} from '../../../store/actions'
import { useDispatch } from 'react-redux';

export default SignIn = () => {

    const [email,setEmail] = useState('')
    const [pw, setPw] = useState('')

    const dispatch = useDispatch()

    const onChangeEmail = (value) => {
        setEmail(value)
    }

    const onChangePw = (value) => {
        setPw (value)
    }

    const _signIn = async () => {
       
        try {
            await AsyncStorage.setItem('user', JSON.stringify(true))
        } catch (e) {
            e.message
        }

        dispatch(actions.user.setUser(true))
          
    }

    return(
                <SafeAreaView style={SigninStyles.mainCont}>
                    <View style={{marginVertical: '10%'}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>Ingrese a la APP</Text>
                    </View>
                    <View style={SigninStyles.rowCont}>
                        <Input 
                            placeholder='Escriba su email'
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                            onChangeText={value=>onChangeEmail(value)}
                            keyboardType= 'email-address'
                        />
                    </View>
                    <View style={SigninStyles.rowCont}>
                        <Input 
                            placeholder="Password" secureTextEntry={true}
                            leftIcon={{ type: 'font-awesome', name: 'lock' }} 
                            onChangeText={value=>onChangePw(value)}
                        />
                    </View>
                    <View style={SigninStyles.rowCont}>    
                        <Button
                            title='Ingresar'
                            containerStyle={{width: '90%'}}
                            onPress={()=> _signIn()}
                        />
                         
                    </View>
                </SafeAreaView>
    )
}