import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Alert,
  Pressable,
  Image
} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import MapView from 'react-native-maps';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(
  'pk.eyJ1IjoiaG9lMDA3IiwiYSI6ImNsYjZ0eGUzeDAyajgzd2xra2txcW1kbzkifQ.4d_T2Q8uGzAxGrcFmECnhA',
);

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
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={14}
            maxZoomLevel={15}
            minZoomLevel={1}
            animationMode={'flyTo'}
            centerCoordinate={[-70.224809, -17.997996]}
          />
          <View>
            <MapboxGL.MarkerView
              id={'AAA'}
              coordinate={[-70.224809, -17.997996]}
              anchor={{x: 0.5, y: 0.5}}>
                <Image 
                source={require("../../../assets/icons/star_filled.png")}
                style={{width:40, height:40}}
                />
            </MapboxGL.MarkerView>
          </View>
        </MapboxGL.MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});
