import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState }                           from 'react';

export const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (<Text>{'Hello'}</Text>
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
