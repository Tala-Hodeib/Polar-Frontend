import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet , Text, View } from 'react-native';
import Main from './src/authentication/Main';
import Login from './src/authentication/Login';


export default function App() {
  return (
    <View style= {styles.container}>
      {/* <Main/> */}
      <Login/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8c5ff',
  },
});

