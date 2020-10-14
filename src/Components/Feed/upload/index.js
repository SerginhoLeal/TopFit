import React from 'react';
import {localhost} from '../../../Services';
import ImagePicker from "react-native-image-picker"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';

import {myHooksContext} from '../../../Context/authContext';

import {HooksFeedContext} from '../Context'

const Feed_Upload = () => {
  const {token} = myHooksContext();

  const {imagens, sendPost, load} = HooksFeedContext();

  return (
    <View style={styles.headers}>

      <Image style={styles.user} source={{
        uri: imagens ? imagens : null
      }} />

      <View style={{height:'50%', justifyContent:'space-evenly'}}>

      {
        load
          ?
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large" color="666" />
        </View>
          :
        null
      }

        <TouchableOpacity onPress={()=>{}} style={styles.buttons}>
          <Icon name="times-circle" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity onPress={sendPost} style={styles.buttons}>
          <Icon name="share" size={20} color="#999" />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headers:{
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    paddingHorizontal:10,
    backgroundColor:'#000',
    justifyContent:'space-between',
  },
  user:{
    // backgroundColor:"#fff",
    width:"50%",
    height:"50%",
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

export default Feed_Upload;