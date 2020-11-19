
import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,TextInput,Navigation,NavigatorIOS } from 'react-native';
import Constants from 'expo-constants';
import GameScreen from './GameScree';
// You can import from local file

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
 
export default function  EndScreen ({navigation,route}){
   
   
  return (
    <View style={styles.container}>
    <View style={styles.displayView}>
    <Text style={styles.display}>Game Stats</Text>
    </View>
     <View style={styles.row1}> 
     <Text style={styles.score}> Score:{route.params.paramKey}</Text>
     <Text style={styles.hint}> Hint Taken:{route.params.paramKey1}</Text>
     </View>
    <View style={styles.nView}> 
     <Text style={styles.n}> Negative Score:{route.params.paramKey2}</Text>
     </View>
       <View style={styles.row2}> 
          <TouchableOpacity style={styles.appButton1}  onPress={() => navigation.navigate('Start')} >
            <Text style={styles.appButtonText}>Finish</Text>
           </TouchableOpacity>
        </View>
     <View style={styles.row3}> 
        <TouchableOpacity style={styles.appButton2} onPress={() => navigation.navigate('Guess A Number')}>
          <Text style={styles.appButtonText}>Play Again </Text>

           </TouchableOpacity>


       
        </View>
 
     
    
    </View>
  )
    
  
}

 const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#10c99e',
  },
  
 displayView:{
       paddingTop:1,
   
    },
  display:{
     
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight:'bold',
    flexDirection:'center',
    borderRadius:10,
    paddingHorizontal:50,

  },
   nView:{
    paddingTop:10,
    flexDirection:'row',
  },
  n:{
    fontSize: 15,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    height: 25,
    width: 200,
    fontFamily: 'sans-serif',
  },
   hint:{
     fontSize: 15,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    height: 25,
    width: 120,
    fontFamily: 'sans-serif',   
  },
  score:{
    
    fontSize: 15,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    height: 25,
    width: 80,
    fontFamily: 'sans-serif',
    
  },
  
  tries:{
    fontSize: 15,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    height: 25,
    width: 80,
    fontFamily: 'sans-serif',
    
  },

  row1:{
    paddingTop:10,
    flexDirection:"row",
  },
  appButton1:{
  elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:10,
    
    
  },
  appButton2:{
  elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:10,
    
  },
  
  appButtonText:{
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
    row2:{
    paddingTop:100,
    flexDirection:"row",
  },
     row3:{
    paddingTop:20,
    flexDirection:"row",
  },

 });