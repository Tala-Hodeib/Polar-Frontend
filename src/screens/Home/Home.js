import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import FontAwesome, { Icon, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Home () {
  const navigation = useNavigation(); 


  return (
    <View style={styles.container}>
       <View>
        <Text style={styles.head}>Home</Text>
      </View>
      <View>
      <Text style ={styles.description1}>If you want to start a new routine</Text>

      </View>
    
  
       <View style={styles.activity}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Activity1')
        }
          style={{
            backgroundColor: '#FFF',
            height: 150,
            width:350,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Activity1.jpeg')}
            style={{
              height: 150,
              width: 350,
              borderRadius: 30,
              opacity: 0.6,
              position: 'absolute',
            }}
          />
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, color: '#ffb6b9', fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Activity 1</Text>
          </View>
        </TouchableOpacity>
    </View>

    <View>
        <ImageBackground
        source={ require('./Logo2.jpeg')}
        style={styles.logo}
         />
      </View>
            <View>
            <Text style ={styles.description2}>If you are having an episode</Text>

            </View>
    <View style={styles.tip1}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Tip1')
        } 
          style={{
            backgroundColor: '#FFF',
            height: 150,
            width:150,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Tip1.jpeg')}
            style={{
              height: 150,
              width: 150,
              borderRadius: 30,
              opacity: 0.6,
              position: 'absolute',
            }}
          />
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, color: '#569ee9', fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Tip 1</Text>
          </View>
        </TouchableOpacity>
    </View>
    
    <View style={styles.tip2}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Tip2')
        } 
          style={{
            backgroundColor: '#FFF',
            height: 150,
            width:150,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Tip2.jpg')}
            style={{
              height: 150,
              width: 150,
              borderRadius: 30,
              opacity: 0.6,
              position: 'absolute',
            }}
          />
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, color: '#569ee9', fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Tip 2</Text>
          </View>
        </TouchableOpacity>
    </View>


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
    marginTop: 70,
  },

  head : {
    fontWeight: 'bold',
    fontSize: 30,
    color : '#354f6b',
    marginTop: 55,
    marginStart: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  activity : {
    marginTop: 60,
    marginLeft: 40,

  },
 tip1 : {
   marginTop: 30,
   marginLeft: 40,
 },

 tip2: {
  marginLeft : 240,
  marginTop: -150,
 },
 description2: {
  color: '#354f6b',
  marginLeft: 20,
  marginTop: 30,
  marginBottom: -15,
},
description1: {
  color: '#354f6b',
  marginLeft: 20,
  marginTop: 30,
    marginBottom: -35,}


});