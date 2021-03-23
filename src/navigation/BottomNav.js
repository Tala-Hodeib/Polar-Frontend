import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import Home from '../screens/Home/Home';
import ActivitiesMain from '../screens/Activities/ActivitiesMain';
import TipsMain from '../screens/Tips/TipsMain';
import Urgent from '../screens/Urgent/Urgent';
import More from '../screens/More/More';




const HomeRoute = () => <Home/>;

const ActivitiesRoute = () => <ActivitiesMain/>;

const TipsRoute = () => <TipsMain/>;

const UrgentRoute = () => <Urgent/>;

const MoreRoute = () => <More/>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home-outline', function : Home },
    { key: 'activities', title: 'Activities', icon: 'dumbbell', function: ActivitiesMain },
    { key: 'tips', title: 'Tips', icon: 'notebook' , function: TipsMain},
    { key: 'urgent', title: 'Urgent', icon: 'alarm-light-outline', function: Urgent },
    { key: 'more', title: 'More',icon :'dots-horizontal-circle-outline', function: More},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    activities: ActivitiesRoute,
    tips: TipsRoute,
    urgent: UrgentRoute,
    more: MoreRoute,

  });

  return (
    <BottomNavigation
      inactiveColor='#354f6b'
      activeColor='#6199ca'
      barStyle={{backgroundColor:'#f5c0c0'}}  
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};



export default BottomNav;