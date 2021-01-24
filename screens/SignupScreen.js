import React, { useState, useContext }               from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';
import { Context as AuthContext }                    from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
  const {state, signUp} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up screen</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder={'Email'}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder={'Password'}
        value={password}
        onChangeText={setPassword}
      />

      <Button title='SignUp' onPress={() => {
        signUp({email, password});
      }}/>

      <Button title='Go To signin' onPress={() => navigation.navigate('SignIn')}/>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false
};

const styles = new StyleSheet.create({

  container: {
    marginBottom: 400,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    height: 30,
  },
  text: {
    fontSize: 16,
    margin: 15
  },
  title: {
    fontSize: 30,
    margin: 20
  }
});

export default SignupScreen;
