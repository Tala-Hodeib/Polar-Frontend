import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import FontAwesome, { Icon, SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import TipPage1 from './TipPage1';

export default function TipsMain () {

  const navigation = useNavigation(); 


  return (
    <ScrollView>

    <View style={styles.container}>
       <View>
        <Text style={styles.head}>Tips</Text>
      </View>
      <View>
       
      </View>
    
  
       <View style={styles.tip1}>
        <TouchableOpacity
         onPress={() =>
          navigation.navigate('Tip1')
        } 
          style={{
            borderRadius: 15,
            backgroundColor: '#FFF',
            height: 250,
            width:380,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Tip1.jpeg')}
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
            style={{ flex: 1,}}>
            <Text style={{ fontSize: 25, color: '#569ee9',marginStart: 10, marginTop: -290, fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Tip 1</Text>
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
            height: 250,
            width:380,
            position: 'relative'
          }}>
          <ImageBackground
            source={require('./Tip2.jpg')}
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
            style={{ flex: 1,  }}>
            <Text style={{ fontSize: 25, color: '#569ee9',marginStart: 10, marginTop: -290, fontWeight: 'bold',textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}>Tip 2</Text>
          </View>
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
    height: 90,
    marginLeft: 300,
    marginTop: -720,
  },
  logo2 : {
    position: 'absolute',
    width: 130 , 
    height: 90,
    marginLeft: 280,
    marginTop: -700,
  },


  head : {
    fontWeight: 'bold',
    fontSize: 30,
    color : '#569ee9',
    marginTop: 55,
    marginStart: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },

 tip1 : {
  marginTop: 60,
  marginLeft: 25,
  },

  tip2 : {
    marginTop: 50,
    marginLeft: 25,  
    marginBottom:40,
  }


});
