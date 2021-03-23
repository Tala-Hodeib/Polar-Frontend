import * as React from 'react';
import { useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground , Switch } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function More () {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  


  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
        source={ require('./Logo2.jpeg')}
        style={styles.logo}
         />
      </View>
      <View>
      <Icon style ={styles.icon} name="user-circle" size={30} color="#354f6b" />
      <Text style={styles.profile}>Profile</Text>
      </View>
      <View>
          <Text style={styles.username}> Change Username</Text>

       <View>
      <TextInput 
       placeholder="New Username"
        placeholderTextColor = '#a8c5ff'
       style={styles.input}/>
       </View>
       <View>
          <Text style={styles.password}> Change Password</Text>
          
      </View>
      <View>
          <TextInput 
       placeholder="New Password"
        placeholderTextColor = '#a8c5ff'
       style={styles.input2}/>
       </View>
      
    </View>
    <View>
      <Icon style ={styles.icon2} name="cogs" size={30} color="#354f6b" />
      <Text style={styles.settings}>Settings</Text>
      </View>
      <View>
          <Text style ={styles.notifications}>Notifications</Text>
          <Switch
          style ={styles.switch}
        trackColor={{ false: "#354f6b", true: "#aee1e1" }}
        thumbColor={isEnabled ? "#fcd1d1" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
          <Text style={styles.about}>About</Text>
          <Text style={styles.abouttxt}>Polar is an app developed for people who suffer from bipolar disorder. 
We provide an app that is yet to be made for this particular disorder, that hopefully would help our users by giving them sections within the app that would help them overcome whatever they are going through.
</Text>
      </View>
      <Button uppercase={false} style ={{backgroundColor: '#cde6f5', width: 180, height:40, borderRadius: 100, marginLeft: 245, marginTop: 18}}
  mode="contained" onPress={() => console.log('Pressed')}>
            <Text   style ={{color: '#354f6b' , fontWeight: 'bold' }}> Logout </Text>
        </Button>
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
  },

  icon: {
      marginTop: -500,
      marginLeft: 40,
  },
  profile : {
      fontSize: 18,
      marginLeft: 75,
      marginTop: -28,
      color : '#354f6b',
      fontWeight: 'bold',
      fontFamily: 'Roboto',


  },

  username : {
    color : '#354f6b',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: -440,
    marginLeft: 40,
    marginBottom: 65,
  },
  password : {
    color : '#354f6b',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginLeft: 40,
    marginTop: 20,
    

  },
  input :{
    marginLeft: 40,
    marginTop: -50,
    margin: 'auto',
    backgroundColor: "white",
    width: 250,
    padding: 10,
    borderRadius: 100,
},
input2 :{
    marginLeft: 40,
    marginTop: 55,
    margin: 'auto',
    backgroundColor: "white",
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 100,
},

icon2 : {
    marginLeft: 38,
    marginTop: -200,
},
settings : {
    fontSize: 18,
    marginLeft: 75,
    marginTop: -28,
    color : '#354f6b',
    fontWeight: 'bold',
    fontFamily: 'Roboto',


},
notifications : {
    color : '#354f6b',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: -140,
    marginLeft: 42,
    marginBottom: 65,
  },

  about : {
    color : '#354f6b',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 20,
    marginLeft: 42,

  },
  switch : {
    marginTop: -90,
    marginRight: 40,
  },

  abouttxt : {
    marginLeft: 55,
    marginTop: 2,
    color : '#354f6b',
    fontFamily: 'Roboto',
    alignItems: 'center',

  }






});