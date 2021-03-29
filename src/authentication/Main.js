import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Main () {
  const navigation = useNavigation(); 


  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
        source={ require('./Logo.jpeg')}
        style={styles.logo}
         />
      </View>
      <View >
         <Button uppercase={false} style ={{backgroundColor: '#cde6f5', width: 180, height:40, borderRadius: 100, marginLeft: 130, marginTop: -140}}
  mode="contained"  onPress={() =>
    navigation.navigate('Login')
  }>
            <Text   style ={{color: '#354f6b' , fontWeight: 'bold' }}> Login </Text>
        </Button>
       
      </View>
      <View >
         <Button uppercase={false} style ={{backgroundColor: '#cde6f5', width: 180, height:40,borderRadius: 100, marginLeft: 130,marginTop: -90 }}
  mode="contained"  onPress={() =>
    navigation.navigate('Register')}>
            <Text   style ={{color: '#354f6b' , fontWeight: 'bold' }}> Sign Up </Text>
        </Button>
       
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
    marginLeft: -1,
    marginTop: 5,
  },



});
