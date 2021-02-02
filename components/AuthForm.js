import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState }                           from 'react';

export const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text style={styles.text}>{headerText}</Text>
      {errorMessage.length > 0 && (<Text style={[styles.text, {color: 'red'}]}>{errorMessage}</Text>)}
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

      <Button title={submitButtonText} onPress={() => {
        onSubmit({email, password});
      }}/>
    </>
  );
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
