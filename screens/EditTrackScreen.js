import React          from 'react';
import { Text,View, StyleSheet  } from 'react-native';

const SignupScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Sign up screen</Text>

    </View>
  );
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,

  },
});

export default SignupScreen;
