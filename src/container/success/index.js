import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Alert,
  Pressable,
  Image,
  Button,
} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import GetLocation from 'react-native-get-location';
import {AuthContext} from '../../AuthProvider';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(
  'pk.eyJ1IjoiaG9lMDA3IiwiYSI6ImNsYjZ0eGUzeDAyajgzd2xra2txcW1kbzkifQ.4d_T2Q8uGzAxGrcFmECnhA',
);

export default function Success({navigation}) {
  const [currentlocation, setCurrentlocation] = useState([0, 0]);
  const [targetlocation, setTargetlocation] = useState([0, 0]);
  const [toggle, setToggle] = useState(false);
  const {send} = useContext(AuthContext);

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      // console.log(location);
      setCurrentlocation([location.longitude, location.latitude]);
    })
    .catch(error => {
      const {code, message} = error;
      // console.warn(code, message);
    });

  useEffect(() => {
    setToggle(true);
  }, [targetlocation]);

  const [route, setRoute] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [-122.083922, 37.4220936],
            [-122.17815293922924, 37.32748502961873],
          ],
        },
      },
    ],
  });

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          onPress={feature => {
            console.log('Target:', feature.geometry.coordinates);
            setTargetlocation(feature.geometry.coordinates);
          }}>
          <MapboxGL.Camera
            // zoomLevel={13}
            maxZoomLevel={18}
            minZoomLevel={10}
            animationMode={'flyTo'}
            centerCoordinate={currentlocation}
          />
          <MapboxGL.ShapeSource id='line1' shape={route}>
            <MapboxGL.LineLayer id='linelayer1' style={{lineColor:'red'}} />
          </MapboxGL.ShapeSource>
          <View>
            <MapboxGL.MarkerView
              id={'Current'}
              coordinate={currentlocation}
              anchor={{x: 0.5, y: 0.5}}>
              <Image
                source={require('../../../assets/icons/pointer.png')}
                style={{width: 40, height: 40}}
              />
            </MapboxGL.MarkerView>
            {toggle && (
              <MapboxGL.MarkerView
                id={'Target'}
                coordinate={targetlocation}
                anchor={{x: 0.5, y: 0.5}}>
                <Image
                  source={require('../../../assets/icons/tpointer.png')}
                  style={{width: 40, height: 40}}
                />
              </MapboxGL.MarkerView>
            )}
          </View>
        </MapboxGL.MapView>
      </View>
      <View style={styles.bottom}>
        <Button
          title="PROCESS"
          onPress={() => {
            send({currentlocation, targetlocation});
          }}
        />
        <Button
          title="CLEAR"
          onPress={() => {
            setToggle(false);
            setTargetlocation([0, 0]);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    height: '90%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
  bottom: {
    backgroundColor: 'green',
    height: '10%',
  },
});
