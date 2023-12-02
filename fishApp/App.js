import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 

import Main from './src/components/Main';
import FishStorage from './src/utils/fishStorage';
import FishStorageContext from './src/contexts/FishStorageContext';

const fishStorage = new FishStorage();

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <FishStorageContext.Provider value={fishStorage}>
          <Stack.Navigator initialRouteName={"Main"} screenOptions={{headerShown:false}}>
            <Stack.Screen name="Main" component={Main}/>
          </Stack.Navigator>
          </FishStorageContext.Provider>
        </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
