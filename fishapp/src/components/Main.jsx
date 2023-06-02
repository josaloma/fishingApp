import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Settings from './Settings';
import AddFish from './AddFish';
//import Icon from "react-native-vector-icons/Ionicons";

import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const Main = () => {
    //tabBar={props => <TabBar {...props} />} 
  return (
    <Tab.Navigator initialRouteName={"home"} 
    screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
      <Tab.Screen name="Settings" component={Settings}         
        options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
            ),
        }}/>
      <Tab.Screen name="Add Fish" component={AddFish} 
        options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus-outline" color={color} size={size} />
            ),
        }}/>
    </Tab.Navigator>
  );
};

export default Main;

// headerShown: false