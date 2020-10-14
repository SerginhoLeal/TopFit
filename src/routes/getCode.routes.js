import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import GetCode from '../Client/getCode'

const routes = () => {

  const LoginStack = createStackNavigator();

  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="GetCode" component={GetCode} />
    </LoginStack.Navigator>
  );
}

export default routes;