import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SendCode from '../Client/sendCode'
import GetCode from '../Client/getCode'

const routes = () => {

  const LoginStack = createStackNavigator();

  return (
    <LoginStack.Navigator 
      // screenOptions={{headerShown:true}}
    >
      <LoginStack.Screen name="SendCode" component={SendCode} />
    </LoginStack.Navigator>
  );
}

export default routes;