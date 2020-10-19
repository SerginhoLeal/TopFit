import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {useNavigation} from '@react-navigation/native'

import DateTimePicker from "react-native-modal-datetime-picker";

import {HooksAulasContext} from '../Context'

const headers = () => {

  const {loadingLessons} = HooksAulasContext();

  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const handleConfirm = (date) => {
    const str = JSON.stringify(date)

    const date_String = (str.substr(0,11));

    function replaceSpecialChars(str){
      str = str.replace(/["]/,"");
      return str.replace(); 
    }

    loadingLessons(replaceSpecialChars(date_String))

    setDatePickerVisibility(false)
  };

  return (
    <View style={styles.heade}>

      <TouchableOpacity style={{padding:15}} onPress={() => navigation.openDrawer()}>
        <Icon name="align-justify" size={25} color="#fff" />
      </TouchableOpacity>

      <Text style={{color:"#fff", fontSize:27}}>AULAS DE HOJE</Text>

      <TouchableOpacity style={{padding:15}} onPress={()=>setDatePickerVisibility(true)}>
        <Icon name="calendar-alt" size={25} color="#fff" />
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={()=>setDatePickerVisibility(false)}
        minimumDate={Date.now()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  heade:{
    flexDirection:'row',
    justifyContent:'space-between',
    // paddingHorizontal:15,
    alignItems:'center',
    height:'8%',
    width:'100%',
    backgroundColor:'#1c1c1c'
  },

})

export default headers;