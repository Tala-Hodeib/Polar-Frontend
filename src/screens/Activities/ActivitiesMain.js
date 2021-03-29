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


export default function ActivitiesMain () {
  const navigation = useNavigation(); 


  return (
    <ScrollView>

    <View style={styles.container}>
       <View>
        <Text style={styles.head}>Activities</Text>
      </View>
      <View>
      </View>
    
  
       <View style={styles.activity1}>
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
              borderRadius: 30,
              opacity: 0.6,
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
        <View
            style={{ flex: 1, }}>
            <Text style={{ fontSize: 25,marginStart: -2, marginTop: -290, color: '#ffb6b9', fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Activity 1</Text>
          </View>
    </View>

    <View style={styles.activity2}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Activity2')
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
            source={require('./reading1.jpg')}
            imageStyle = {{borderRadius : 15}}
            style={{
              height: 250,
              width: 380,
              borderRadius: 30,
              opacity: 0.6,
              position: 'absolute',
            }}
          />
        </TouchableOpacity>
        <View
            style={{ flex: 1, }}>
            <Text style={{ fontSize: 25, color: '#ffb6b9',marginStart: -2, marginTop: -290, fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Activity 2</Text>
          </View>
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
    width: 130 , 
    height: 80,
    marginLeft: 280,
    marginTop: -720,
  },
  logo2 : {
    position: 'absolute',
    width: 130 , 
    height: 80,
    marginLeft: 260,
    marginTop: -700,
  },


  head : {
    fontWeight: 'bold',
    fontSize: 30,
    color : '#ffb6b9',
    marginTop: 55,
    marginStart: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  activity1 : {
    marginTop: 60,
    marginLeft: 40,


  },

  activity2 : {
    marginTop : 50,
    marginLeft: 40,
    marginBottom: 40,

  },




});