/*
  MyClass: Carregando a aula selecionada pelo usuario
*/

import * as React from 'react';
import {myHooksContext} from "../../../Context/authContext";
import { ProgressBar, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';

import {HooksAulasContext} from '../Context'

const myClass = () => {
  const { token, data, signOut } = myHooksContext();
  const { myClass, DesmarcarHorario } = HooksAulasContext();
  
  return(
    <>
      {myClass.length === 0 
        ? <Text style={{color:"#fff"}}>Você ainda não margou uma aula</Text>
        :(
          myClass.map(Aulas =>(
            
            <View style={styles.box} key={Aulas._id}>
              
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',}}>
            
                <View style={{flex:1,justifyContent:'space-evenly'}}>

                  <Text style={styles.title}>{Aulas.aulaTipo}</Text>
                  <Text style={styles.horas}>Hoje às {Aulas.horas}</Text>

                  <View style={{flexDirection:'row'}}>
                    <View style={{width:"14%", height:"100%", backgroundColor:'#fff', borderRadius:50}} />
                    <Text style={styles.horas}> Prof: {Aulas.professor}</Text>
                  </View>

                </View>

                <View style={{flex:1, alignItems:"flex-end", justifyContent:'space-evenly'}}>
                  
                  <Icon name="star" size={20} color="#999" />
                  
                  <TouchableOpacity onPress={()=>DesmarcarHorario(Aulas)} style={styles.buttonConf}>
                    <Text style={{fontSize:20, color:"#fc0303"}}>Desmarcar</Text>
                  </TouchableOpacity>
                  
                  <Text style={{fontSize:20, color:"#fff"}}>{Aulas.confirmar.length}/30 vagas</Text>
                
                </View>

              </View>

              <View style={{marginTop:5, marginBottom:5}}>
                <ProgressBar progress={Aulas.confirmar.length / 30} color={Colors.red800} />
              </View>

            </View>

          ))
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#000",
    // justifyContent:'center',
    // alignItems:'center'
  },
  title:{
    color:'#fff',
    fontSize:28,
    marginTop:3,
    marginBottom:3
  },
  horas:{
    color:'#fff',
    fontSize:17,
    marginTop:3,
    marginBottom:3
  },
  box:{
    paddingHorizontal:10,
    width:"90%",
    height:'20%',
    borderRadius:10,
    marginTop:'0.5%',
    marginBottom:'2%',
    backgroundColor:'#2c2c2c',
  },
  buttonConf:{
    width:"70%",
    height:"25%",
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'#fff'
    borderColor:'#fc0303',
    borderWidth:2
  }
})

export default myClass;