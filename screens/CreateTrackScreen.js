import React          from 'react';
import { Text,View, StyleSheet  } from 'react-native';

const CreateTrackScreen = () => {
  return (
    <View>
      <Text styles={styles.text}>SignupScreen</Text>

    </View>
  );
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,

  },
});

export default CreateTrackScreen;
