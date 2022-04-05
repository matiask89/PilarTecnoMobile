import React, { Component, useCallback, useEffect, useState } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground,
    Dimensions
} from 'react-native';
import { styles } from './styles'
import Header from '../../components/Header';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getPokemon, IMG_URL } from '../../api';
import { getPokemonImgId } from '../../utils'
import { Image } from 'react-native-elements';
import Collapsible from 'react-native-collapsible';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default ListDetail = (props) => {

    const {url} = props.route.params.item
    const [pokemon, setPokemon] =useState()
    const [imgID, setImgID] =useState()
    const [iscollapsed, setIsCollapsed] = useState(true)

    useEffect(()=>{
        getPokemon(url).then(data=> {
            const path = url.split('/')
            setPokemon(data)
            setImgID(getPokemonImgId(path[6]))
        })
    },[])

    return(
        
        <SafeAreaView style={styles.container}>
            <View style={styles.mainCont}>  
            <View style={styles.rowCont}>
            <Header tittle={pokemon?.name} leftIcon={'arrow-left'} leftAction={()=>props.navigation.goBack()}/>
            </View>
                <ScrollView contentContainerStyle={{ flex: 1, width}}>
                
                    <View style={{flex: 1}}>
                        <Image style={{width: '100%', height:'100%'}} resizeMode='contain' source={{uri: `${IMG_URL}${imgID}.png`}} />
                    </View>
                    <View style={{flex: 1, alignContent:'center', justifyContent:'center', alignItems:'center'}}>
                        <View style={{height: height/3, width: width/1.1, backgroundColor:'#5a616e', borderRadius:20, padding:10}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.text}><Text style={styles.text}>Peso: </Text>{pokemon?.weight}, </Text>
                                <Text style={styles.text}><Text style={styles.text}>Altura: </Text>{pokemon?.height}, </Text>
                                <Text style={styles.text}><Text style={styles.text}>Numero: </Text>{pokemon?.id}</Text>
                                
                            </View>
                            <View style={{flexDirection:'column'}}> 
                                
                                <TouchableOpacity onPress={()=>setIsCollapsed(!iscollapsed)}>
                                    <Text style={styles.text}>Habilidades</Text>
                                </TouchableOpacity>
                                <Collapsible collapsed={iscollapsed}>
                                    {
                                        
                                        pokemon?.abilities.map(a => (
                                        <View style={{flexDirection:'row'}}>
                                        <Text><Text style={styles.text}>{a.ability.name}</Text></Text>
                                        </View> 
                                    ))
                                        
                                    }

                                </Collapsible>    
                            </View>
                            <View>
                                <Text style={styles.text}>Tipos: </Text>
                                {pokemon?.types.map(type=>(
                                        <Text style={styles.text}>{type.type.name}</Text>
                                ))}
                                
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View> 
        </SafeAreaView>                
    )
}