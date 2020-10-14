import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Feed_Image from '../../Components/Feed'

import {myHooksContext} from "../../Context/authContext"

import {localhost} from '../../Services'

const Tabs = () => {
  const { token, data } = myHooksContext();

  const [feed, setFeed] = React.useState([])

  const loadingFeed = () => {
    fetch(`${localhost}/8dr7YKjlJ3aXKcnwGJrm`,{
      method:'get',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    }).then(res => res.json())
    .then(res => {
      setFeed(res.feed)
    })
  }

  const likePost = (reload) => {
    fetch(`${localhost}/tuo5NSqTcZ7fXUKBMtGh/${reload._id}`,{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        user:data._id,
        'Authorization':`Bearer ${token}`
      }
    }).then(res => res.json())
    .then(res => {
      if(res.error == "Você_não_pode_se_avaliar"){
        Alert.alert('Ops','Você não pode se avaliar')
      }
      if(res.error == "Você_Já_deixou_o_seu_like"){
        Alert.alert('Ops','Você já avaliou essa pessoa')
      }
      loadingFeed();
    })
  }

  React.useEffect(()=>{
    loadingFeed();
  },[])

  return (
    <>
  
      <Feed_Image />

      <View style={styles.body}>
        <ScrollView>
          {
            feed.map(reload => (
              <View style={{marginTop:10}} key={reload._id}>

                <View style={styles.infoUser}>

                  <Image style={styles.imageUser} source={{uri:reload.imgCliente}} />

                  <View style={{flex:1, marginLeft:10}}>
                    <Text style={{fontSize:25, color:'#fff'}}>{reload.clienteNome}</Text>
                    <Text style={{fontSize:15, color:'#fff'}}>{reload.createAt}</Text>
                  </View>

                  <TouchableOpacity style={{ padding:10}}>
                    <Icon name="ellipsis-h" size={15} color="#999" />
                  </TouchableOpacity>

                </View>
                
                <Image style={styles.user} source={{uri:reload.imgCliente}} />

                <View style={styles.actions}>
                  
                  <TouchableOpacity onPress={()=>likePost(reload)} style={styles.viewActions}>
                    <Icon name="heart" size={20} color="#999" />
                    <Text style={{marginLeft:5, fontSize:20, color:'#fff'}}>{reload.likes.length}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.viewActions}>
                    <Icon name="comment" size={20} color="#999" />
                    <Text style={{marginLeft:5, fontSize:20, color:'#fff'}}>0</Text>
                  </TouchableOpacity>

                </View>
              
              </View>
            ))
          }
        </ScrollView>

      </View>

    </>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#000",
  },
  txt:{
    color:'#fff',
    fontSize:15,
    marginTop:3,
    marginBottom:3
  },
  user:{
    padding:"45%",
    // borderRadius:5,
    // marginBottom:20,
    borderWidth:1,
    borderColor:'#fff',
  },
  imageUser:{
    width:50,
    height:50,
    borderRadius:25,
    borderColor:'#fc0303',
    borderWidth:1
  },
  infoUser:{
    flexDirection:'row', 
    width:"100%",
    marginBottom:10,
    alignItems:'center',
    paddingHorizontal:10,
  },
  actions:{
    flexDirection:'row',
    width:"100%",
    alignItems:'center',
  },
  viewActions:{
    padding:20,
    alignItems:'center',
    flexDirection:'row',
  }
})

export default Tabs;