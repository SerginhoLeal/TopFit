import React from 'react';
import { View, Text, StatusBar, StyleSheet, Button } from 'react-native';
import {myHooksContext} from "../../Context/authContext"
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tabs = () => {
  const { data, signOut } = myHooksContext();

  return (
    <>
      <StatusBar hidden={true}/>
      <View style={styles.body}> 
        <Icon name="home" size={20} color="#999" />
        <Text style={styles.txt}>{data.nome}, você está na página Treino</Text>
        <Button title="Logout" onPress={()=>signOut()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#1c1c1c",
    justifyContent:'center',
    alignItems:'center'
  },
  txt:{
    color:'#fff',
    fontSize:15,
    marginTop:3,
    marginBottom:3
  }
})

export default Tabs;