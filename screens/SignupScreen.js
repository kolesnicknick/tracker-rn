import React, { useState, useContext }               from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';
import { Context as AuthContext }                    from '../context/AuthContext';
import { AuthForm }                                  from '../components/AuthForm';
import { NavigationEvents }                          from 'react-navigation';


const SignupScreen = ({navigation}) => {
  const {state, signUp, clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm headerText={'Sign Up'} errorMessage={state.errorMessage} submitButtonText={'Sign Up'} onSubmit={signUp}/>
      <Button title='Have an account? Sign In.' onPress={() => navigation.navigate('SignIn')}/>
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
