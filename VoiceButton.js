
import React,{useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
var Sound = require('react-native-sound');

var donkey = require("./donkey.png");
var sheep = require("./sheep.png");
var cow = require("./cow.png");
var monkey = require("./monkey.png");
var lion = require("./lion.png");
var rooster = require("./rooster.png");

// var donkeyS = require("donkey.mp3");
// var sheepS = require("sheep.mp3");
// var cowS = require("cow.mp3");
// var monkeyS = require("monkey.mp3");
// var lionS = require("lion.mp3");
// var roosterS = require("rooster.mp3");

export default function VoiceButton({ animalName,sound, setSound }) {
 
  const selectAnimal = () => {
    switch (animalName) {
      case 'donkey':
        return donkey
        break;
      case 'sheep':
        return sheep;
        break;
      case 'cow':
        return cow;
        break;
      case 'monkey':
        return monkey;
        break;
      case 'rooster':
        return rooster;
        break;
      case 'lion':
        return lion;
        break;
    }
  }
  const selectAnimalVoice = () => {
    switch (animalName) {
      case 'donkey':
        return "donkey.mp3"
        break;
      case 'sheep':
        return "sheep.mp3"
        break;
      case 'cow':
        return "cow.mp3"
        break;
      case 'monkey':
        return "monkey.mp3";
        break;
      case 'rooster':
        return "rooster.mp3";
        break;
      case 'lion':
        return "lion.mp3";
        break;
    }
  }
 

  const onPress = () => {
    sound && sound.pause();
     var s = new Sound(selectAnimalVoice(), Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        return;
      }
      s.play();
    });
    setSound(s)
  }


  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.img} source={selectAnimal()} />
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  img: {
    width: 110,
    height: 110
  },
  container: {
    flex: 1,
    margin: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
