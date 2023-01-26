import { StyleSheet, Text, View,FlatList} from 'react-native';
import  React from 'react';


export default function User(props){

    return(
        <View style={styles.container}>
        <Text style={styles.name}>Nome: {props.data.name}</Text>
        <Text style={styles.role}>Cargo: {props.data.role}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
      height:100,
      width:400
    },
    name:{
     fontSize:30,
     fontWeight:'bold',

    },
    role:{
 fontSize:20,
 fontStyle:'italic',
 color:"green"
    },
  });
  
