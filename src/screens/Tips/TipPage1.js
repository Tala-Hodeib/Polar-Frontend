import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import FontAwesome, { Icon, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


export default function TipPage1 () {

  return (

    <ScrollView>
    <View style={styles.container}>
     
      <View>
       
      </View>
    
  
       <View style={styles.tip1}>
        <ImageBackground
          style={{
            marginLeft: -30,
            backgroundColor: '#FFF',
            height: 500,
            width:500,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Tip1.jpeg')}
            style={{
              height: 500,
              width: 500,
              borderRadius: 30,
              opacity: 0.5,
              position: 'relative',
            }}
          />
        </ImageBackground>
        <View>
    <ImageBackground
          style={{
            marginTop: -20,
            borderRadius : 15,
            marginLeft: -15,
            backgroundColor: '#ccddff',
            height: 300,
            width:440,
            position: 'relative'
          }}> 
          </ImageBackground>
          <View>
         <View><Text style={styles.head}>Tip 1</Text></View> 
            <Text style={{textAlign: 'center',marginTop: -230,fontSize: 18,marginRight:20, color: '#354f6b', fontWeight: 'bold',}}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
          </View>
    </View>


    {/* <View>
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
    marginTop: -280,
    marginBottom: 2,
    marginStart: 35,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

  tip1 : {
    marginLeft : 10,
    marginTop: -20,

  },



});