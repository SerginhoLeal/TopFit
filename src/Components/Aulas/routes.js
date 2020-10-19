import * as React from 'react';
import {View} from 'react-native';
import Feed_Headers from './headers'
import Docs from "./docs";
import MyClass from "./class";

const Tabs = () => {

  return (
    <>

    <Feed_Headers />

    <View style={{flex:1, backgroundColor:'#000'}}>

      <View style={{flex:1, marginTop:"5%", marginBottom:"5%", alignItems:'center'}}>

        <MyClass />

        <Docs />

      </View>

    </View>

  </>
  );
  
}

export default Tabs;