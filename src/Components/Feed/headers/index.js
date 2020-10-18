import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {useNavigation} from '@react-navigation/native'

import DateTimePickerModal from "react-native-modal-datetime-picker";

const headers = () => {
  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
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

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={()=>setDatePickerVisibility(false)}
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