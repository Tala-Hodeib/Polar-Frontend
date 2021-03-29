import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import FontAwesome, { Icon, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function ActivityPage1 () {

  return (
    <ScrollView>
    <View style={styles.container}>
    
  
       <View style={styles.activity1}>
     
        <ImageBackground
          style={{
            marginLeft: -30,
            backgroundColor: '#FFF',
            height: 500,
            width:450,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Activity1.jpeg')}
            style={{
              height: 500,
              width: 500,
              borderRadius: 30,
              opacity: 0.5,
              position: 'relative',
            }}
          />
           
        </ImageBackground>
    
    </View>
    <View>
    <ImageBackground
          style={{
            marginTop: -20,
            borderRadius : 15,
            marginLeft: -5,
            backgroundColor: '#ccddff',
            height: 300,
            width:440,
            position: 'relative'
          }}> 
          </ImageBackground>
          <View>
         <View><Text style={styles.head}>Activity 1</Text></View> 
            <Text style={{textAlign: 'center',marginTop: -230,alignItems: 'center',fontSize: 18,marginRight:20, color: '#354f6b', fontWeight: 'bold',}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
          </View>


    {/* <View>
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
      </View> */}
    
  

    </View>
    </ScrollView>
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
    height: 80,
    marginLeft: 280,
    marginTop: -525,
  },
  logo2 : {
    position: 'absolute',
    width: 130 , 
    height: 80,
    marginLeft: 270,
    marginTop: -505,
  },


  head : {
    fontWeight: 'bold',
    fontSize: 25,
    color : '#ffb6b9',
    marginTop: -280,
    marginStart: 35,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  activity1 : {
    marginLeft : 10,
    marginTop: -20,

  },



});