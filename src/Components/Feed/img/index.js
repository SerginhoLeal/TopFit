import React from 'react';
import {localhost} from '../../../Services';
import ImagePicker from "react-native-image-picker"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, ActivityIndicator, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import {myHooksContext} from '../../../Context/authContext';

import {HooksFeedContext} from '../Context'

const Feed_Image = () => {
  const {data, token} = myHooksContext();

  const {_uploadGalery, _uploadCamera, load} = HooksFeedContext();


  return (
    <View style={styles.headers}>

      <View style={{flexDirection:'row', alignItems:'center'}}>

        <Image style={styles.user} source={{uri:data.image}} />

        <View style={{marginLeft:10}}>
          <Text style={{fontSize:20, color:'#fff'}}>Nova Publicação</Text>
          <Text style={{fontSize:15, color:'#fff'}}>Adicionar ao feed</Text>
        </View>

      </View>

      {
        load
          ?
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large" color="666" />
        </View>
          :
        null
      }

      <View style={{flexDirection:'row'}}>

        <TouchableOpacity onPress={_uploadGalery} style={styles.buttons}>
          <Icon name="folder-open" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity onPress={_uploadCamera} style={styles.buttons}>
          <Icon name="camera" size={20} color="#999" />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headers:{
    flexDirection:'row',
    height:60,
    alignItems:'center',
    paddingHorizontal:10,
    backgroundColor:'#000',
    justifyContent:'space-between',
    borderBottomColor:"#1c1c1c",
    borderWidth:2,
  },
  user:{
    // backgroundColor:"#fff",
    width:50,
    height:50,
    borderRadius:25
  },
  buttons:{
    padding:10,
    backgroundColor:'#1c1c1c',
    marginLeft:2,
    marginRight:2,
    borderRadius:25
  }
})

export default Feed_Image;