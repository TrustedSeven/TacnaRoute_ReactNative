import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Button,
} from 'react-native';

export default function Splash({navigation}) {
  return (
    <View style={styles.back}>
      <View style={styles.imagelayout}>
        <Image
          source={require('../../../assets/image.png')}
          style={styles.image}
        />
        <Text style={styles.title}>
          Tacna Transportaion
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Click here to get Started"
          onPress={() => navigation.navigate('Success')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  title:{
    fontSize:36,
    color:'red',
    top:20
  },
  image: {
    width: '100%',
    height: '80%',
  },
  imagelayout:{
    alignItems: 'center',
    top:20
  },
  back: {
    width: '100%',
    height: '100%',
    backgroundColor:'#ffffff'
  },
});
