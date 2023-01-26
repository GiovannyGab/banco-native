import { StyleSheet, Text, View,FlatList} from 'react-native';
import React,{useState} from 'react';
import User from './src/User';
export default function App() {
  
  const[user,setUser]= useState([
    {id:1,name:'Giovanny', role:'Desenvolvedor'}
  ])
  
  
  return (
    
    
    <View style={styles.container}>
      <FlatList
      data={user}
      renderItem = {({item})=><User data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

