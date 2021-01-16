import React                      from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Sign up screen</Text>
      <Button title = 'Go To signin' onPress={() => navigation.navigate('SignIn')}/>
    </View>
  );
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,

  },
});

export default SignupScreen;
