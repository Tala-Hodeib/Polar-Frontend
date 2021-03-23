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
    flex: 1,
    backgroundColor: '#a8c5ff',
  },

  logo : {
    position: 'absolute',
    width: 380 , 
    height: 380,
    marginLeft: 50,
    marginTop: 245,
    },

  head : {
    fontWeight: 'bold',
    fontSize: 30,
    color : '#822659',
    marginTop: 55,
    marginStart: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  emergency : {
    color : '#822659',
    marginTop : 110,
    marginLeft: 60,
    fontSize: 25,
    fontWeight: 'bold',

  }, 
  call : {
      position: 'absolute',
      height: 80,
      width: 80,
     marginTop: 150,
     marginLeft: 180,
  },

  description: {
      color: '#822659',
      marginLeft: 20,
  }


});