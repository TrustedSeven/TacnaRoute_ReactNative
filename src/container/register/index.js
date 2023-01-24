import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
// import Button from 'react-native-button';
import {AppStyles} from '../../AppStyles';

function RegisterScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const onPressRegister = () => {
    console.log('=======Register button press=======');
    navigation.navigate('LogIn');
  };

  const Login = () =>{
    navigation.navigate('LogIn')
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Register</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail or phone number"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Confirm Password"
          onChangeText={setConfirmpassword}
          value={confirmpassword}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity
        style={styles.loginContainer}
        onPress={() => onPressRegister()}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.or}>Already have account?</Text>
        <TouchableOpacity onPress={()=>Login()}>
          <Text style={styles.signup}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  row: {
    flexDirection: 'row',
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  signup: {
    color: 'blue',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginLeft: 0,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
});

export default RegisterScreen;
