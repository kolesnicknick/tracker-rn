import React          from 'react';
import { Text,View, StyleSheet  } from 'react-native';

const AccountScreen = () => {
  return (
    <View>
      <Text styles={styles.text}>Account screen</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,

  },
});

export default AccountScreen;
