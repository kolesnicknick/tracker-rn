import React                              from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Track List screen</Text>
      <Button title='Go To Track Detail screen' onPress={() => navigation.navigate('TrackDetail')}/>
    </View>
  );
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,

  },
});

export default TrackListScreen;
