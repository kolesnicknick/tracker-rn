import React, { useContext, useEffect } from 'react';
import { Text,View, StyleSheet  }       from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveScreen = () => {
  const {tryLocalSignIn} = useContext(AuthContext);
  useEffect(() => {
    console.log('RESOLVE SCREEN');
    tryLocalSignIn();
  }, []);

  return null;
};

const styles = new StyleSheet.create({
  text: {
    fontSize: 18,

  },
});

export default ResolveScreen;
