import React                              from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const TrackDetailScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Track Detail Screen</Text>
      <Button title='Go To Track List' onPress={() => navigation.navigate('TrackList')}/>
    </View>
  );
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,

  },
});

export default TrackDetailScreen;
