import React from 'react';
import {myHooksContext} from "./Context/authContext";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DrawerStyle = (props) => {//props para a mudança de pagina
  const { data, signOut } = myHooksContext();
  return(
    <View style={styles.body}>

      <View style={{padding:'15%',alignItems:'center'}}>
        <Image style={styles.img} source={{uri:'https://res.cloudinary.com/zasetrewsqw/image/upload/v1596385047/DreamJob/boa_gmlml8.png'}}/>
        <Text style={{fontSize:18, color:'#fff'}}>{data.nome}</Text>
      </View>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Home')}}>
        <View style={styles.icones}>
          <Icon name="home" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        <View style={styles.icones}>
          <Icon name="star" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Avaliação Física</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        <View style={styles.icones}>
          <Icon name="calendar-alt" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Minha Agenda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        <View style={styles.icones}>
          <Icon name="calendar-check" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Meu Dia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        <View style={styles.icones}>
          <Icon name="tint" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Beber Água</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        <View style={styles.icones}>
          <Icon name="wrench" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Conversor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        <View style={styles.icones}>
          <Icon name="cogs" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        <View style={styles.icones}>
          <Icon name="user-check" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Avaliar Seu Professor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={() => {props.navigation.navigate('Settings')}}>
        <View style={styles.icones}>
          <Icon name="info-circle" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={signOut}>
        <View style={styles.icones}>
          <Icon name="sign-out-alt" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>Sair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttom} onPress={()=>{}}>
        <View style={styles.icones}>
          <Icon name="map-marker-alt" size={20} color="#fff" />
        </View>
        <Text style={styles.txt}>TOPFIT</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#1c1c1c'
  },
  buttom:{
    height:30,
    width:'90%',
    marginTop:10,
    marginBottom:10,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:10,
    paddingHorizontal:10,
  },
  txt:{
    fontSize:18,
    color:'#fff',
    left:10
  },
  img:{
    width:100,
    height:100,
    borderRadius:25,
    // alignItems:"center",
    // justifyContent:'center',
    backgroundColor:'rgba(52, 52, 52, 0.9)'
  },
  icones:{
    width:35,
    height:35, 
    justifyContent:'center', 
    alignItems:"center"
  }
})

export{
  DrawerStyle
};