import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';

import {myHooksContext} from "../Context/authContext"

import TextInputMask from "react-native-text-input-mask"

const Client = () => {

  const [numero, setNumero] = React.useState('');

  const { sendCode, error, carregando } = myHooksContext();

  function handleSendCode(){
    Keyboard.dismiss();
    sendCode(numero);
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

        <Text style={{color:'#fff',fontSize:50}}>Acessar com o Telefone</Text>

        <View style={styles.boxInput}>
          <TextInputMask 
            keyboardType='numeric' 
            style={{flex:1, color:'#fff', fontSize:18}}
            onChangeText={setNumero} 
            value={numero} 
            mask={"+55([00])[0000]-[0000]"} 
            placeholderTextColor='#555' 
            placeholder="+55"
          />
        </View>

        <TouchableOpacity onPress={handleSendCode} style={[styles.buttonGo,{backgroundColor:numero ?"#FC6E20":"#FC6E20aa"}]}>
          <Text style={{color:'#fff',fontSize:20}}>Continuar</Text>
        </TouchableOpacity>

        <Text style={{color:'#fff', fontSize:15, marginTop:50, marginBottom:50, textAlign:'center'}}>ou</Text>

        <TouchableOpacity onPress={handleSendCode} style={[styles.buttonGo,{backgroundColor:"#000000aa",borderColor:"#fff", borderWidth:2}]}>
          <Text style={{color:'#fff',fontSize:20}}>Acessar com Usuario</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>  
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#000",
    // justifyContent:'center',
    // alignItems:'center'
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
  box:{
    marginHorizontal:30,
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
    // backgroundColor:'#FC6E20',
  },
})

export default Client;