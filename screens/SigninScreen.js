import React, { useContext }        from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { AuthForm }                 from '../components/AuthForm';
import { Context as AuthContext }   from '../context/AuthContext';
import { NavigationEvents }         from 'react-navigation';

const SigninScreen = ({navigation}) => {
  const {state, signIn, clearErrorMessage} = useContext(AuthContext);

  return (
    <View>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm headerText={'Sign In'} errorMessage={state.errorMessage} submitButtonText={'Sign In'} onSubmit={signIn}/>
      <Button title='Dont have an account? SignUp' onPress={() => navigation.navigate('SignUp')}/>
    </View>
  );
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

export default SigninScreen;
