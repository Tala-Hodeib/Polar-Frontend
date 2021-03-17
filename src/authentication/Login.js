import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Main () {

  return (
    <View style={styles.container}>
        <View>
            <Image source= { require ('./Name.jpeg')} style={styles.Name}></Image>
        </View>
      <View>
        <ImageBackground
        source={ require('./Logo2.jpeg')}
        style={styles.logo}
         />
      </View>
          
    
       <View>
      <TextInput 
       placeholder="Password"
        placeholderTextColor = '#a8c5ff'
       style={styles.input}/>
       </View>
       <View>
      <TextInput placeholder="Email" 
        placeholderTextColor = '#a8c5ff'
        style={styles.input2}/>
    </View>
      <View >
      <TouchableOpacity>
          <Text style={styles.login}> login </Text> 
          </TouchableOpacity>
       
      </View>
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
    marginLeft: 10,
    marginTop: -50,
  },
 
  Name : {
    height: '50%',
    width: '50%',
    alignSelf: 'center',
  },


login : {
   borderRadius: 100,
   marginLeft: 130,
   backgroundColor: '#ece2e1',
   color:'#354f6b',
   fontWeight: 'bold',
   width: 180, 
   padding: 10,
   textAlign: 'center',
   marginTop: -580,

   
},

 input :{
        marginTop: -660,
        marginLeft: 80,
        margin: 'auto',
        backgroundColor: "white",
        width: 250,
        padding: 10,
        borderRadius: 100,

        
    },
    
    input2 : {
        marginTop: -730,
        marginLeft: 80,
        backgroundColor: 'white',
        width: 250,
        padding: 10,
        borderRadius: 100,
    
    }

});
    


   