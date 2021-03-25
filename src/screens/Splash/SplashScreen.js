import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function SplashScreen () {

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
        source={ require('./Logo.jpeg')}
        style={styles.logo}
         />
      </View>

   

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8c5ff',
  },

  logo : {
    width: 490, 
    height:580,
    marginLeft: -40,
    marginTop: 60,
  },



});
