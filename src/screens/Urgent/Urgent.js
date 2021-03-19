import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Linking } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import FontAwesome, { Icon, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Urgent () {

  return (
    <View style={styles.container}>
       <View>
        <Text style={styles.head}>Urgent</Text>
      </View>
      <Text style ={styles.description}>If you feel that your mind is not calming down, call your emergency contact</Text>

      <View>
        <ImageBackground
        source={ require('./call2.png')}
        style={styles.call}
         />
      </View>

    <View>
        <ImageBackground
        source={ require('./Logo2.jpeg')}
        style={styles.logo}
         />
      </View>

      <Text style={styles.emergency} onPress={()=>{Linking.openURL('tel:');}}>Call emergency contact</Text>
    



    </View>
  );
}


const styles = StyleSheet.create({

  container : {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    margin: 30,
    textAlign: 'center',
    lineHeight: 5,
    backgroundColor: '#a8c5ff',
  },

  logo : {
    position: 'absolute',
    width: 380 , 
    height: 380,
    marginLeft: 20,
    marginTop: 250,
    opacity: 0.7,
  },

  head : {
    fontWeight: 'bold',
    fontSize: 30,
    color : '#822659',
    marginTop: 20,
    marginBottom: 2,
    marginStart: -5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  emergency : {
    color : '#822659',
    marginTop : 110,
    marginLeft: 30,
    fontSize: 25,
    fontWeight: 'bold',

  }, 
  call : {
      position: 'absolute',
      height: 80,
      width: 80,
     marginTop: 150,
     marginLeft: 150,
  },

  description: {
      color: '#822659',
  }


});