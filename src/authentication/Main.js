import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Main () {

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
        source={ require('./Logo.jpeg')}
        style={styles.logo}
         />
      </View>
      <View >
      <TouchableOpacity>
          <Text style={styles.login}> login </Text> 
          </TouchableOpacity>
       
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.signup}> Sign Up </Text>
        </TouchableOpacity>
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
    width: '100%' , 
    height:'85%',
    marginLeft: -1,
    marginTop: 5,
  },



login : {
   borderRadius: 100,
   marginTop: -120,
   marginLeft: 120,
   backgroundColor: '#ece2e1',
   color:'#354f6b',
   fontWeight: 'bold',
   width: 180, 
   padding: 10,
   textAlign: 'center',
   
},

signup : {
    borderRadius: 100,
    marginTop: -70,
    marginLeft: 120,
    backgroundColor: '#d3e0dc',
    color:'#354f6b',
    fontWeight: 'bold',
    width: 180, 
    padding: 10,
    textAlign: 'center',

}


});
