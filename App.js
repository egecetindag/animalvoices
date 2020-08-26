import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import VoiceButton from './VoiceButton';
var Sound = require('react-native-sound');

export default function App() {
 const [sound, setSound] = useState(false);

  return (
    <View style={styles.container}>
     <ImageBackground source={require('./afternoon-landscape.jpg')} style={styles.image}>
      <StatusBar style="auto" />
      <View style={styles.line}>
        <VoiceButton setSound={setSound} sound={sound} animalName="cow" />
        <VoiceButton setSound={setSound} sound={sound} animalName="sheep" />
      </View >

       <View style={styles.line}>
        <VoiceButton setSound={setSound} sound={sound} animalName="donkey" />
        <VoiceButton setSound={setSound} sound={sound} animalName="rooster" />
      </View>

       <View style={styles.line}>
        <VoiceButton  setSound={setSound} sound={sound} animalName="monkey" />
        <VoiceButton  setSound={setSound} sound={sound} animalName="lion" />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  line:{
    flex:1,
    flexDirection:'row'
  },
  image:{
       paddingTop:'10%',
    paddingBottom:'5%',
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
 
    flex: 1,
    justifyContent: 'center',
  },
});
