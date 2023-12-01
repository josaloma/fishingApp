import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

import { useState, useEffect } from 'react'

//import useFishList from '../hooks/useFishList.js';


import OneFish from './OneFish.jsx';

import useFishStorage from '../hooks/useFishStorage';

const ItemSeparator = () => <View style={styles.separator} />;
/*
const renderItem = ({item, navigation})=> {
    return (
        <OneFish fullName={item.fullName} weight={item.weight} length={item.length} navigation={navigation}/>
    );
};
*/
/*
useEffect(() => {
    const initList = async () => {
      try {
        console.log('before get');
        const userData = await AsyncStorage.getItem('token');
        if (userData !== null) {
          setLocalToken(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [localToken]);


useEffect(() => {
    const fishList2 = await fishStorage.getFishList();
}, [])
*/
const FishList = ({navigation}) => {
    const fishStorage = useFishStorage();
    const [isLoading, setIsLoading] = useState(true);
    const [fishList, setFishList] = useState([]);
    const isFocused = useIsFocused();
    //var fishList = [];
    //const fishList2 = await fishStorage.getFishList();
    //const fishList2 = useFishList();
    /*const InitList = async () => {
        //const fishStorage = useFishStorage();
        fishList = await fishStorage.getFishList();
        setIsLoading(false);
        console.log(fishList)
        return fishList
    };*/
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fishListTemp = await fishStorage.getFishList();
                setIsLoading(false);
                setFishList(fishListTemp);
                console.log("UseEffectissä fishlist", fishList)
                //console.log("UseEffectisssä2", fishList2)
            } catch (e) {
                console.log("Virhe listan haussa useEffectissä")
            } 
        }
        fetchData()
    }, [isFocused]); //
    
   /* if (fishList.length==0) {
        return (
            <Text style={styles.text}>Fishlist empty</Text>
        )
    }*/

    if (isLoading) {
        console.log("FishList isloading: ", isLoading);
    
        return <View><Text>Loading...</Text></View>;
    } else {
        console.log("FishList loaded and isloading: ", fishList, isLoading);
    

    return (
        <FlatList
        data={fishList}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <OneFish item={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        />
    );
    };
};

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    text: {
        color: 'black', 
        fontSize: 24, 
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default FishList;

//        renderItem={renderItem(item, navigation)}
//renderItem={({ item }) => <OneFish item={item} navigation={navigation}/>}
