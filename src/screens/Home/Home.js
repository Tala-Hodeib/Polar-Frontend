import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import FontAwesome, { Icon, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home () {
  const navigation = useNavigation(); 


  return (
    <ScrollView>
    <View style={styles.container}>
       <View>
        <Text style={styles.head}>Home</Text>
      </View>
      
      <View>
            <Text style ={styles.description1}>If you want to start a routine</Text>

            </View>
    
    
  
       <View style={styles.activity}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Activity1')
        }
          style={{
            marginStart: -15,
            borderRadius: 15,
            backgroundColor: '#FFF',
            height: 250,
            width:380,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Activity1.jpeg')}
            imageStyle = {{borderRadius : 15}}
            style={{
              height: 250,
              width: 380,
              opacity: 0.6,
              position: 'absolute',
            }}
          />
          <View
            style={{ marginStart: 10, marginTop: -40, }}>
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

          <View style={styles.TIPS}>
    <View style={styles.tip1}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Tip1')
        } 
          style={{
            borderRadius: 15,
            backgroundColor: '#FFF',
            height: 180,
            width:180,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Tip1.jpeg')}
            style={{
              height: 180,
              width: 180,
              borderRadius: 30,
              opacity: 0.6,
              position: 'absolute',
            }}
            imageStyle = {{borderRadius : 15}}
          />
        </TouchableOpacity>
        <View
            style={{ marginTop: -120,marginLeft: 190}}>
            <Text style={{fontSize: 25, color: '#569ee9', fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Tip 1</Text>
            <Text style= {{color:'#354f6b', fontWeight: 'bold'}}>Some description here</Text>

          </View>
    </View>
    
    <View style={styles.tip2}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Tip2')
        } 
          style={{
            borderRadius: 15,
            backgroundColor: '#FFF',
            height: 180,
            width:180,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Tip2.jpg')}
            imageStyle = {{borderRadius : 15}}
            style={{
              height: 180,
              width: 180,
              borderRadius: 30,
              opacity: 0.6,
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
        <View
            style={{  marginTop: -120,marginLeft: 190 }}>
            <Text style={{ fontSize: 25, color: '#569ee9', fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Tip 2</Text>
            <Text style= {{color:'#354f6b', fontWeight: 'bold'}}>Some description here</Text>

          </View>
        </View>
    </View>


    </View>
    </ScrollView>
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
    marginLeft: 55,
    marginTop: 57,
  },

  head : {
    fontWeight: 'bold',
    fontSize: 30,
    color : '#354f6b',
    marginTop: 30,
    marginStart: 15,
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  activity : {
    marginTop: 50,
    marginLeft: 40,

  },
 tip1 : {
   marginTop: 20,
   marginLeft: 20,
   marginBottom: 15,
 },

 tip2: {
  marginLeft : -350,
  marginTop: 220,
  marginBottom: 100,
 },
 description2: {
  color: '#354f6b',
  marginLeft: 20,
  marginTop: 40,
  fontWeight: 'bold',
  fontSize: 15,
  
},
description1: {
  color: '#354f6b',
  marginLeft: 20,
  marginTop: -15,
  marginBottom: -35,
  fontWeight: 'bold',
  fontSize: 15,

  },

    TIPS : {
      display: 'flex',
      flexDirection: 'row',
    },

   



});