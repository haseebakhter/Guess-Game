import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS,ScrollView,TextComponent} from 'react-native';
import Constants from 'expo-constants';



 export default function  StartScreen ({navigation}) {
 
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}> Train Your mind</Text>
      <View style={styles.inner}>
        <Text style={styles.welcome}> Welcome: </Text>
        <Text style={styles.start}>
          Click the below button to start the game
        </Text>
      </View>
      <View style={styles.buttonframe}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('Guess A Number')}>
           
          <Text style={styles.appButtonText} >Play Game</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rights}>
        <Text style={styles.welcome}> Copyrights:</Text>
        <Text style={styles.start}> Haseeb Akhter</Text>
        <Text style={styles.start}> Sp18-Bcs-064</Text>
      </View>
    </View>
  );
}
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#10c99e',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:10,
    height: 35,
    width: 300,
    fontFamily: 'sans-serif',
  },
  inner: {
    paddingTop: 100,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: 250,
  },
  start: {
    fontSize: 18,
    paddingLeft: 60,
    paddingRight: 60,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonframe: {
    paddingTop: 70,
  },
  rights: {
    paddingTop: 25,
  },
});
