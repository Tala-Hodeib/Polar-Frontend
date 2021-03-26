import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import { Card } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';


 function Login({ navigation }) {
 

      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [error,setError] = useState(null);
          const loginUser = async () => {
          console.log(email);
          console.log(password);
          let response = await fetch ('http://127.0.0.1:8000/api/auth/login', { 
          method: 'post',
           headers: { 'content-type':'application/json'
       
            },
            body: JSON.stringify(
            {  
              email: email
              , password: password
            })
          });
          let data = await response.json()
          console.log(data);
          if (data.error) {
              setError('Invalid Email or Password');
              setPassword('');
            return
          }
          props.setToken(data.access_token)
         }
         const storeData = async (value) => {
              try {
               await AsyncStorage.setItem('token', data.access_token)
               } catch (e) {
  
  } }
        const getData = async () => {
            try {
         const value = await AsyncStorage.getItem('token')
            if(value !== null) {
              }
           } catch(e) {
    }
  }
         

        
        
  return (
          <ScrollView keyboardDismissMode="interactive" style={styles.container}>
          <View >
        <View>
            <Image source= { require ('./Name.jpeg')} style={styles.Name}></Image>
        </View>
      <View>
        <ImageBackground
        source={ require('./Logo2.jpeg')}
        style={styles.logo}
         />
      </View>
          
    <View style={styles.inputs}>
       <View>
      <TextInput 
      onChangeText={value => {
        setPassword(value);
        setError('');
    }}
    value = {password}
     secureTextEntry={true}
       placeholder="Password"
        placeholderTextColor = '#a8c5ff'
       style={styles.input}/>
       </View>

       <View>
      <TextInput
       onChangeText={value => {
        setEmail(value); }}
        value = {email}
       placeholder="Email" 
        placeholderTextColor = '#a8c5ff'
        style={styles.input2}/>
    </View>
    </View>
    <View >
         <Button uppercase={false} style ={{backgroundColor: '#cde6f5', width: 180, height:40, borderRadius: 100, marginLeft: 128, marginTop: -400}}
  mode="contained"   onPress={() => navigation.navigate('Nav') } >
            <Text   style ={{color: '#354f6b' , fontWeight: 'bold' }}> Login </Text>
        </Button>
       </View>
      </View>
      </ScrollView>
  );
} 


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a8c5ff',
  },

  logo : {
    width: 430 , 
    height: 400,
    marginLeft: 5,
    marginTop: 110,
  },
 
  Name : {
    height: 190,
    width: 190,
    alignSelf: 'center',
    marginLeft: 8,
    marginTop: 20,

  },


 input :{
        marginTop: -530,
        marginLeft: 90,
        margin: 'auto',
        backgroundColor: "white",
        width: 250,
        padding: 10,
        borderRadius: 100,

        
    },
    
    input2 : {
        marginTop: -470,
        marginLeft: 90,
        backgroundColor: 'white',
        width: 250,
        padding: 10,
        borderRadius: 100,
    
    },

    checkbox : {
        backgroundColor: 'red',
        color: 'black',
    },



});
export default Login;

