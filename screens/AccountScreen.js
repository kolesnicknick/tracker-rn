import React, { useContext }              from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Context as AuthContext}          from '../context/AuthContext';
import { SafeAreaView }                   from 'react-navigation';

const AccountScreen = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text styles={styles.title}>Account screen</Text>
      <Button title='Create Track' onPress={() => console.log('CREATING TRACK')}/>
      <Button title='Log OUT' onPress={logOut}/>
    </SafeAreaView>
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

export default AccountScreen;
