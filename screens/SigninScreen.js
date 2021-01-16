import React                              from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const SigninScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Sign in</Text>
      <Button title='Go To SignUp' onPress={() => navigation.navigate('SignUp')}/>

      <Button title='Go To Main Flow' onPress={() => navigation.navigate('TrackList')}/>

    </View>
  );
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,

  },
});

export default SigninScreen;
