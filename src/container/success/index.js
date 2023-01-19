import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Alert,
  Pressable,
} from 'react-native';
// import MapboxGL from '@rnmapbox/maps';
import MapView from 'react-native-maps';

// MapboxGL.setWellKnownTileServer('Mapbox');
// MapboxGL.setAccessToken('pk.eyJ1IjoiaG9lMDA3IiwiYSI6ImNsYjZ0eGUzeDAyajgzd2xra2txcW1kbzkifQ.4d_T2Q8uGzAxGrcFmECnhA');

export default function Success({navigation}) {
  const [region, setRegion] = useState();
  const getInitialState = () => {
    setRegion({
      latitude: -17.997996,
      longitude: -70.224809,
      latitudeDelta: 0.031222,
      longitudeDelta: 0.0312421,
    });
  };
   

  return (
    <MapView
      initialRegion={{
        latitude: -17.997996,
        longitude: -70.224809,
        latitudeDelta: 0.031222,
        longitudeDelta: 0.0312421,
      }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});
