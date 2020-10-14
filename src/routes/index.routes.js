import React from 'react';
import SendRoutes from './sendCode.routes';
import GetRoutes from './getCode.routes';
import PagesRoutes from './pages.routes';

import {View, ActivityIndicator} from "react-native"

import {myHooksContext} from '../Context/authContext';

const routes = () => {
  const {codeForNext, signed, loading} = myHooksContext();
  
  if(loading){
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="666" />
      </View>
    )
  }

  const loginDoSujeito = signed ? <PagesRoutes /> : <GetRoutes />

  return codeForNext ? loginDoSujeito : <SendRoutes />

}

export default routes;