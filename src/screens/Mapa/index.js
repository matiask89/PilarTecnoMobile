import React,{ Component, useEffect, useState } from 'react';
import {
SafeAreaView,
Dimensions,
Text,
View,
} from 'react-native';
import { Image, Icon } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {styles} from './style';
import Header from '../../components/Header';
import { Switch } from '@rneui/themed';
import ToggleSwitch from 'toggle-switch-react-native'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const ASPECT_RATIO = width / height;
const LATITUDE = -33.3018708;
const LONGITUDE = -66.3298548;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default Mapa = (props) => {
    const [region, setRegion] = useState({
        latitude:LATITUDE,
    longitude:LONGITUDE,
    latitudeDelta:LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
    })

const [color, setColor] = useState(false);
const [mapaTipo, setMapaTipo] = useState('standard');

const toggleSwitch = () => {
    if(mapaTipo=='standard'){
        setMapaTipo('satellite')
        setColor(true)
    }
    if (mapaTipo=='satellite'){
        setMapaTipo('standard')
        setColor(false)  
    }
  };

useEffect(()=>{
    _getLocation()
}, [])

onRegionChange = region => {
        console.log(region);
        setRegion(region)
    }

/* componentDidMount = () => {
    this._getLocation()
    } */

_getLocation = async ()=>{
    await Geolocation.getCurrentPosition(
    async posicion => {
    const longitude = posicion.coords.longitude;
    const latitude = posicion.coords.latitude;
    mapRef.animateToRegion(
    {
        latitude,
        longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta
    },
        1000
    );
        setRegion({region:{...region, longitude,latitude}})
        console.log('posicion actual... Latitud: '+`${JSON.stringify(longitude)}`+
        'latitud: '+`${JSON.stringify(latitude)}`)
    },
    (error) => {
        console.log('')
        console.log('')
        console.log('')
        console.log('')
        console.log(error.code, error.message);
    },
    {
        accuracy: {
        android: 'high',
        ios: 'best',
    },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
    }
    )
    }

    const  fitCoordinates = async() => {
    console.log('centrando mapa')
    await _getLocation()
    }

return(
    
    
    <View style={styles.container}>
           
        <MapView
            initialRegion={region}
            style={styles.map}
            mapType={mapaTipo}
            onRegionChangeComplete={(region)=>onRegionChange(region)}
            provider= {PROVIDER_GOOGLE}
        // region={this.state.region}
        />
        <View style={styles.header}>
        <Header/>
        </View>
        <View style={styles.icon}>
            <Icon
                name="crosshairs"
                type="font-awesome"
                color='#8d2d84'
                size={width/10}
                onPress={() => fitCoordinates()}
            />
        </View>
        <View style={styles.switch}>
        <ToggleSwitch
            isOn={color}
            onColor="green"
            offColor="red"
            label="Vista"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="small"
            onToggle={()=> toggleSwitch()}
            
        />
        </View>
        <View style={styles.markerFixed}>
            <Image style={styles.marker} source={require('../../assets/images/pin.png')}
            />
        </View>
            <SafeAreaView style={styles.footer}>
                <Text style={styles.region}>longitud:
                {JSON.stringify(region.longitude)}{"\n"}latitud:
                {JSON.stringify(region.latitude)}</Text>
            </SafeAreaView>   
    </View>
    )}