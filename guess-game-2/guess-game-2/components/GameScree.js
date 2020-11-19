
import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,TextInput,Navigation,NavigatorIOS } from 'react-native';
import Constants from 'expo-constants';

// You can import from local file

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
 
    
export default function GameScreen({navigation}) {
  const display="Result will be displayed here";
  const[getDisplay,setDisplay]=useState(display);
  const score=0;
  const[getScore,setScore]=useState(score)
  const chance=5;
  const[getchance,setchance]=useState(chance)
  const result="";
  const[getResult,setResult]=useState(result);
  let randomNum=Math.floor(Math.random() * 10) + 1;
  let [getrandomNum,setrandomNum]=useState(randomNum);
  const [count, setCount] = useState(0);
   const [getHint, setHint] = useState(0);
   const [getNscore, setNscore] = useState(0);
  const GenerateRandom=()=>{
      setrandomNum(Math.floor(Math.random() * 10) + 1);
      
    
   }
  
   const hint=()=>{
     const hint=getrandomNum+3;
     setDisplay("Random number is less than "+hint);
     setScore(getScore-2);
     setHint(getHint+1);
     setNscore(getNscore+2);
   
   }
  const compare=()=>{
   
    console.log(count);
     if(count==5){
       alert("Remainig tries:0"+" Press the Stats button to see stats")
       setCount(0);
       setScore(0);
     }
     var input = parseInt(getResult, 10);
     if (input > getrandomNum) {
      setDisplay("Too High");
      setchance(getchance-1);
       setCount(count+1);
    } else if (input <  getrandomNum) {
      setDisplay("Too Low");
      setchance(getchance-1);
       setCount(count+1);
    } else {
         setDisplay("Guessed right (Big Brain)");
         setScore(getScore+10);
         setrandomNum(Math.floor(Math.random() * 10) + 1);
    }
  }
    
  const clear=()=>{
    setResult("");
  }
  
   return(
     <View style={styles.container}>
      <Text style={styles.tries}> Tries:{getchance}</Text>
     <View style={styles.scoreView}>
      <Text style={styles.score}> Score:{getScore}</Text>
   
     </View>
      <View style={styles.resultView}>
      <Text style={styles.result}  >
      {getResult}
      </Text>
      </View>
       <View style={styles.displayView}>
         <Text style={styles.display}> {getDisplay} </Text>
       </View> 
        <View style={styles.row1}> 
          
         <TouchableOpacity style={styles.appButton1} onPress={GenerateRandom}> 
         <Text style={styles.appButtonText}> Generate Random</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.appButton2} onPress={hint}> 
         <Text style={styles.appButtonText}>Hint</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.appButton3} onPress={() => navigation.navigate('End',{paramKey:getScore,paramKey1:getHint,paramKey2:getNscore,}) } >
         <Text style={styles.appButtonText}>Stats</Text>
         </TouchableOpacity>
           </View>
           <View style={styles.row2}>
           <TouchableOpacity style={styles.appButton4} onPress={compare}> 
         <Text style={styles.appButtonText}>Guess A number</Text>
         </TouchableOpacity>
           </View>

           <View style={styles.row3}>
            <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"1")}> 
         <Text style={styles.appButtonText}>1</Text>
         </TouchableOpacity>
             <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"2")}> 
         <Text style={styles.appButtonText}>2</Text>
         </TouchableOpacity>
             <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"3")}> 
         <Text style={styles.appButtonText}>3</Text>
         </TouchableOpacity>
               <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"4")}> 
         <Text style={styles.appButtonText}>4</Text>
         </TouchableOpacity>
           </View>
           <View style={styles.row4}>
           <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"5")}> 
         <Text style={styles.appButtonText}>5</Text>
         </TouchableOpacity>
             <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"6")}> 
         <Text style={styles.appButtonText}>6</Text>
         </TouchableOpacity>
             <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"7")}> 
         <Text style={styles.appButtonText}>7</Text>
         </TouchableOpacity>
               <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"8")}> 
         <Text style={styles.appButtonText}>8</Text>
         </TouchableOpacity>
           </View>
            <View style={styles.row5}>

             <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"9")}> 
         <Text style={styles.appButtonText}>9</Text>
         </TouchableOpacity>
               <TouchableOpacity style={styles.numPad} onPress={()=>setResult(getResult+"0")}> 
         <Text style={styles.appButtonText}>0</Text>
         </TouchableOpacity>
             <TouchableOpacity style={styles.numPad} onPress={clear}> 
         <Text style={styles.appButtonText}>C</Text>
         </TouchableOpacity>
           </View>
           
     </View>
     
   );
}

 const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#10c99e',
    paddingTop:10
  },
    resultView:{
      paddingTop:40,
    },
    displayView:{
      paddingTop:20,
    },
  result:{
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    height: 40,
    width: 310,
    fontFamily: 'sans-serif',

  },
 
  display:{

    fontSize: 15,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    height: 40,
    width: 310,
    fontFamily: 'sans-serif',
  },
  scoreView:{
    paddingTop:5,
    paddingRight:230
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
    paddingTop:20,
    flexDirection:"row",
  },
  appButton1:{
  elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:10,
    width:'50%'
  },
  appButton2:{
  elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:10,
    width:'20%'
  },
  appButton3:{
  elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:10,
    width:'29%'
  },
  appButton4:{
  elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:10,
    width:'99%'
  },

  appButtonText:{
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
    row2:{
    paddingTop:1,
    flexDirection:"row",
  },
  numPad:{
  elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal:10,
    width:'22%'
  },
  
   row3:{
    paddingTop:1,
    flexDirection:"row",
  },
 row4:{
    paddingTop:1,
    flexDirection:"row",
  },
 row5:{
    paddingTop:1,
    flexDirection:"row",
  },
   row6:{
    paddingTop:1,
    flexDirection:"row",
  },




 });