import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import FontAwesome, { Icon, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function ActivityPage2 () {

  return (
    <View style={styles.container}>
       <View>
        <Text style={styles.head}>Activity 2</Text>
      </View>
      <View>
       
      </View>
    
  
       <View style={styles.activity2}>
        <ImageBackground
          style={{
            backgroundColor: '#FFF',
            height: 400,
            width:390,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./reading1.jpg')}
            style={{
              height: 400,
              width: 390,
              borderRadius: 30,
              opacity: 0.5,
              position: 'absolute',
            }}
          />
          <View
            style={{ flex: 1 , justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
        </ImageBackground>
    </View>


    <View>
        <ImageBackground
        source={ require('./cloud.png')}
        style={styles.logo}
         />
      </View>
      <View>
        <ImageBackground
        source={ require('./cloud.png')}
        style={styles.logo2}
         />
      </View>
    
  

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
    marginTop: 40,
  },

  logo : {
    position: 'absolute',
    width: 130 , 
    height: 80,
    marginLeft: 240,
    marginTop: -530,
  },
  logo2 : {
    position: 'absolute',
    width: 130 , 
    height: 80,
    marginLeft: 220,
    marginTop: -500,
  },


  head : {
    fontWeight: 'bold',
    fontSize: 25,
    color : '#ffb6b9',
    marginTop: 30,
    marginBottom: 2,
    marginStart: -5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  activity2 : {
    marginLeft : -10,
    marginTop: 60,

  },



});