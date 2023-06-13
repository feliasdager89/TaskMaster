import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput,} from 'react-native';
import TaskCard from './Components/TaskCard';

export default function App() { 


const [text, setText] = useState(''); 
const [task, setTask] = useState([]);

//task event handlers 
const taskInputHandler = (enteredText) =>{
    setText(enteredText);
} 

const addTask = () =>{
  if(text !== ''){
    setTask(
      (prev)=>[
        ...prev, text
      ]
    )
  } 
  setText('')
}


  return (
    <View style={styles.container}>
      <Text>Task Master</Text>
      <StatusBar style="auto" /> 

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputBar}
          onChangeText={taskInputHandler} 
          placeholder='Enter Task'
        /> 
        <TouchableOpacity style={styles.taskButton} onPress={addTask}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.tasksContainer}>
        <ScrollView style ={styles.scrollview}>
          <TaskCard task = "Get Markers"/> 
          {
            task.map((item, index)=>{
              return(
                <TouchableOpacity key ={index}>
                  <TaskCard task={item} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '80%'

  },  
  inputBar:{
    width: '80%', 
    height: 40, 
    backgroundColor: 'grey',
    padding: 8, 
    borderRadius: 6, 
    marginRight: 14

  }, 
  taskButton:{
    backgroundColor:'#44B4F3', 
    width: 74, 
    height:49, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 4, 

  }, 
  tasksContainer:{
    height:400, 
    justifyContent: 'space-evenly',
  }, 

  scrollview:{
    
  }
  
});
