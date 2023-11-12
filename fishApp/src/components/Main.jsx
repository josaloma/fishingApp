import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Settings from './Settings';
import AddFish from './AddFish';

import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();
// sininen #0366d6',
const Main = () => {
    //tabBar={props => <TabBar {...props} />} 
  return (
    <Tab.Navigator initialRouteName={"home"} 
    screenOptions= {{
        headerStyle: { backgroundColor: '#24292e' },
        headerTintColor: '#fa8072',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: '#fa8072',
        tabBarActiveBackgroundColor: '#24292e',
        tabBarInactiveTintColor: '#fff',
        tabBarInactiveBackgroundColor: '#0366d6',
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