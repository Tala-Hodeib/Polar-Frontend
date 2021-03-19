import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Login () {
    const [checked, setChecked] = React.useState(false);

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
    <View>
    <Checkbox.Android style={styles.checkbox}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
    <View >
         <Button uppercase={false} style ={{backgroundColor: '#cde6f5', width: 180, height:40, borderRadius: 100, marginLeft: 128, marginTop: -580}}
  mode="contained" onPress={() => console.log('Pressed')}>
            <Text   style ={{color: '#354f6b' , fontWeight: 'bold' }}> Login </Text>
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
    marginLeft: 10,
    marginTop: -50,
  },
 
  Name : {
    height: '50%',
    width: '50%',
    alignSelf: 'center',
    marginLeft: 8,
  },


 input :{
        marginTop: -660,
        marginLeft: 90,
        margin: 'auto',
        backgroundColor: "white",
        width: 250,
        padding: 10,
        borderRadius: 100,

        
    },
    
    input2 : {
        marginTop: -730,
        marginLeft: 90,
        backgroundColor: 'white',
        width: 250,
        padding: 10,
        borderRadius: 100,
    
    },

    checkbox : {
        backgroundColor: 'red',
        color: 'black',
    }

});
    


   