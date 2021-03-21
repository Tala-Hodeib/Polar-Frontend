import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet , Text, View } from 'react-native';
import Main from './src/authentication/Main';
import Login from './src/authentication/Login';
import Register from './src/authentication/Register';
import BottomNav from './src/navigation/BottomNav';
import Home from './src/screens/Home/Home';
import ActivitiesMain from './src/screens/Activities/ActivitiesMain';
import ActivityPage1 from './src/screens/Activities/ActivityPage1';
import ActivityPage2 from './src/screens/Activities/ActivityPage2';
import TipsMain from './src/screens/Tips/TipsMain';
import TipPage1 from './src/screens/Tips/TipPage1';
import TipPage2 from './src/screens/Tips/TipPage2';
import Urgent from './src/screens/Urgent/Urgent';
import More from './src/screens/More/More';










export default function App() {
  return (
    <View style= {styles.container}>
      {/* <Main/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <BottomNav/>
      {/* <Home/> */}
      {/* <ActivitiesMain /> */}
      {/* <ActivityPage1/> */}
      {/* <ActivityPage2/> */}
      {/* <TipsMain/> */}
      {/* <TipPage1/> */}
      {/* <TipPage2/> */}
      {/* <Urgent/> */}
      {/* <More /> */}






    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8c5ff',
  },
});

