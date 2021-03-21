import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';


const HomeRoute = () => <Text>Home</Text>;

const ActivitiesRoute = () => <Text>Activities</Text>;

const TipsRoute = () => <Text>Tips</Text>;

const UrgentRoute = () => <Text>Urgent</Text>;

const MoreRoute = () => <Text>More</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home-outline' },
    { key: 'activities', title: 'Activities', icon: 'dumbbell' },
    { key: 'tips', title: 'Tips', icon: 'notebook' },
    { key: 'urgent', title: 'Urgent', icon: 'alarm-light-outline' },
    { key: 'more', title: 'More',icon :'dots-horizontal-circle-outline', },
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
      barStyle={{backgroundColor:'#bbe9fb'}}  
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};



export default BottomNav;