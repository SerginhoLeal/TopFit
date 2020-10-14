import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {DrawerStyle} from '../StyledDrawer'

import Home from '../Pages/Drawer/Home'
import Settings from '../Pages/Drawer/Settings'

import Feed from "../Pages/Tabs/Feed"
import T_Casa from "../Pages/Tabs/T_Casa"
import Aulas from "../Pages/Tabs/Aulas"
import Treino from "../Pages/Tabs/Treino"
import Wod from "../Pages/Tabs/Wod"

const routes = () => {

  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigation = () => (

      <Tab.Navigator 
        screenOptions={() => ({
          tabBarIcon: ({ focused, color, size }) => {
            <Icon size={size} color={color} />
          },
        })}
        tabBarOptions={{
          // activeBackgroundColor:"#000",
          activeTintColor:'#000',
        }}
        barStyle={{ backgroundColor: '#694fad' }}
        

        // screenOptions={() => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     <Icon size={size} color={color} />
        //   },
        // })}
        // activeColor="#ff0000"
        // inactiveColor="#5f5f5f"
        // barStyle={{ backgroundColor: '#1c1c1c' }}
      >

        <Tab.Screen 
          name="Feed" 
          component={Feed}
          options={{
            tabBarLabel:"Feed",
            // tabBarBadge: 2,
            tabBarIcon:({color}) => (
              <Icon name="home" size={20} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name="T_Casa" 
          component={T_Casa}
          options={{
            tabBarLabel:"T.Casa",
            tabBarIcon:({color}) => (
              <Icon name="tv" size={20} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name="Aulas" 
          component={Aulas}
          options={{
            tabBarLabel:"Aulas",
            tabBarIcon:({color}) => (
              <Icon name="user-friends" size={20} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name="Treino" 
          component={Treino}
          options={{
            tabBarLabel:"Treino",
            tabBarIcon:({color}) => (
              <Icon name="clock" size={20} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name="Wod" 
          component={Wod}
          options={{
            tabBarLabel:"Wod",
            tabBarIcon:({color}) => (
              <Icon name="fire" size={20} color={color} />
            )
          }}
        />

      </Tab.Navigator>
      
  )

  return (
    <Drawer.Navigator
      drawerContent={skoa => <DrawerStyle {...skoa} />}//skoa para importa o estilo e o props
    >

      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Settings" component={Settings} />

    </Drawer.Navigator>
  );
}

export default routes;