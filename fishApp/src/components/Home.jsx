
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FishList from './FishList';
import FishDetails from './FishDetails';

const SubTab = createNativeStackNavigator();

const Home = ({navigation}) => {
    return (
        <SubTab.Navigator initialRouteName={"FishList"}
        screenOptions={{
            headerShown: false
          }}>
          <SubTab.Screen name="FishList" component={FishList} />
          <SubTab.Screen name="FishDetails" component={FishDetails} />
        </SubTab.Navigator>
      );
};

export default Home;

/*return (
    <SubTab.Navigator>
      <SubTab.Screen name="FishList" component={FishList} />
      <SubTab.Screen name="Testi" component={Testi} />
    </SubTab.Navigator>
  );*/

/*    return (
        <FishList/>
      );*/