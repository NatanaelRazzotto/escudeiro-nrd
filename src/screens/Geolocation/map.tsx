import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { requestForegroundPermissionsAsync , getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy} from 'expo-location';
import { styles } from '../../../styles';
import { useEffect, useState, useRef } from 'react';
import MapView , { Marker}from 'react-native-maps';

export function MapGeolocation() {

  const [location , setLocation] = useState<LocationObject | null>(null);

  const mapRef = useRef<MapView>(null)

  async function requestLocationPermission() {
    const {granted} = await requestForegroundPermissionsAsync();
    if (granted){
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition)
      console.log("Localização Atual => ",currentPosition)

    }
  }

  useEffect(()=> {
    requestLocationPermission();
  },[]);

  useEffect(()=>{
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval : 1
    },(reponse) => {
      console.log("Nova Localização!", reponse);
      setLocation(reponse)
      mapRef.current?.animateCamera({
        pitch:70,
        center: reponse.coords
      })
    })
  },[])
  return (
    <View style={styles.container}>
      {
        location && 
        <MapView 
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude:location.coords.latitude,
            longitude:location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}>
            <Marker coordinate={{
            latitude:location.coords.latitude,
            longitude:location.coords.longitude
          }}></Marker>

        </MapView>
      }
     
    </View>
  );
}

