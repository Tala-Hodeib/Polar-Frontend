import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import FontAwesome, { Icon, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function TipPage2 () {

  return (
    <View style={styles.container}>
       <View>
        <Text style={styles.head}>Tip 2</Text>
      </View>
      <View>
       
      </View>
    
  
       <View style={styles.tip2}>
        <ImageBackground
          style={{
            backgroundColor: '#FFF',
            height: 400,
            width:390,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Tip2.jpg')}
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
        source={ require('./cloud2.png')}
        style={styles.logo}
         />
      </View>
      <View>
        <ImageBackground
        source={ require('./cloud2.png')}
        style={styles.logo2}
         />
      </View>
    
  

    </View>
  );
}


const styles = StyleSheet.create({

  container : {
  flex:1,
    backgroundColor: '#a8c5ff',
  },

  logo : {
    position: 'absolute',
    width: 130 , 
    height: 90,
    marginLeft: 300,
    marginTop: -530,
  },
  logo2 : {
    position: 'absolute',
    width: 130 , 
    height: 90,
    marginLeft: 280,
    marginTop: -500,
  },


  head : {
    fontWeight: 'bold',
    fontSize: 25,
    color : '#569ee9',
    marginTop: 55,
    marginBottom: 2,
    marginStart: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  tip2 : {
    marginLeft : 25,
    marginTop: 60,

  },



});