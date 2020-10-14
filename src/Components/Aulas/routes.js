import * as React from 'react';
import {View} from 'react-native';
import Docs from "./docs";
import MyClass from "./class";

const Tabs = () => {

  return (

    <View style={{flex:1, backgroundColor:'#000'}}>

      <View style={{flex:1, marginTop:"5%", marginBottom:"5%", alignItems:'center'}}>

        <MyClass />

        <Docs />

      </View>

    </View>

  );
  
}

export default Tabs;