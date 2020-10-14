import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';

import {myHooksContext} from "../Context/authContext"

const Client = () => {
  const [GetCode, setGetCode] = React.useState('');

  const { getCode, error, carregando } = myHooksContext();

  function handleSignIn(){
    Keyboard.dismiss();
    getCode(GetCode);
  }

  return(
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.select({android:true, ios:true})}
      style={styles.body}
    >

      {carregando && (<Text style={{color: `#fff`}}>Carregando...</Text>)}
      {error && (<Text style={{color: `#fff`}}>Falha no login ou na senha</Text>)}

      <View style={styles.box}>

        <Text style={{color:'#fff',fontSize:40}}>Confirme o código</Text>

        <View style={styles.boxInput}>
          <TextInput keyboardType="numeric" style={{flex:1, color:'#fff', fontSize:18}} onChangeText={setGetCode} value={GetCode} placeholderTextColor='#fff' placeholder="Código"/>
        </View>


        <TouchableOpacity onPress={handleSignIn} style={styles.buttonGo}>
          <Text style={{color:'#fff',fontSize:20}}>Continuar</Text>
        </TouchableOpacity>

      </View>


    </KeyboardAvoidingView>  
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#1c1c1c",
    // justifyContent:'center',
    // alignItems:'center'
  },
  txt:{
    color:'#fff',
    fontSize:15,
    marginTop:3,
    marginBottom:3
  },
  box:{
    marginHorizontal:30,
  },
  input:{
    width:250,
    padding:15,
    marginTop:5,
    color:'#1c1c1c',
    marginBottom:5,
    borderRadius:25,
    paddingHorizontal:30,
    backgroundColor:'#ffffffaa',
  },
  boxInput:{
    height:50,
    marginTop:5,
    marginBottom:5,
    borderRadius:25,
    borderWidth:2,
    borderColor:"#fff",
    paddingHorizontal:30,
    backgroundColor:'#3c3c3c',
  },
  buttonGo:{
    height:50,
    borderRadius:25,
    paddingHorizontal:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FC6E20',
  },
})

export default Client;