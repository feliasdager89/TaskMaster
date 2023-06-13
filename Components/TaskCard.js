import React from 'react' 
import { StyleSheet, Text, View } from 'react-native';

export default function TaskCard({task}) {
  return (
    <View style={styles.card}>
        <Text style={styles.baseText}>{task}</Text> 
        
    </View>
  )
}


const styles = StyleSheet.create({
    
    card:{
        backgroundColor: "#1F3E4F", 
        flexDirection: 'row', 
        width: 369, 
        height: 82, 
        borderRadius: 6, 
        alignItems: 'center',
        marginBottom: 20, 
        justifyContent: 'center'
    }, 
    baseText:{  
      marginTop: 20,
      color: "white", 
      fontSize: 24,
      fontWeight: '500', 
      marginLeft: 10,  
      justifyContent: 'center'

    }
  });