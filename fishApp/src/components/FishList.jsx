import { FlatList, View, Text, TextInput, Pressable, ScrollView,  StyleSheet } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

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

const RenderListHeader = ( {sortBySpecies, sortByPlace, sortByWeight, sortByLength} ) => {
    return (
        <View style={styles.container}>
            {/*<ScrollView horizontal={true}>*/}
                <Text style={styles.text}>Sort By: </Text>
                <Pressable style={styles.sortButton} onPress={sortBySpecies}>
                    <Text>species</Text>
                </Pressable>
                <Pressable style={styles.sortButton} onPress={sortByPlace}>
                    <Text>place</Text>
                </Pressable>
                <Pressable style={styles.sortButton} onPress={sortByWeight}>
                    <Text>weight</Text>
                </Pressable>
                <Pressable style={styles.sortButton} onPress={sortByLength}>
                    <Text>length</Text>
                </Pressable>
            {/*</ScrollView>*/}
        </View>
    );
  };

const FishList = ({navigation}) => {
    const fishStorage = useFishStorage();
    const [isLoading, setIsLoading] = useState(true);
    const [fishList, setFishList] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        // haetaan lista async storagesta
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fishListTemp = await fishStorage.getFishList();
                setIsLoading(false);
                setFishList(fishListTemp);
                console.log("UseEffectissä fishlist", fishList);
            } catch (e) {
                console.log("Virhe listan haussa useEffectissä", e)
            } 
        }
        fetchData()
    }, [isFocused]);

    const sortBySpecies = async () => {
        console.log("sortBySpecies nappi painettu flatlist headerissä");
        const sortedFishList = fishList.sort((a, b) => a.species.localeCompare(b.species));
        console.log("sortBySpecies sortedFishList", sortedFishList);
        setFishList(sortedFishList);
        console.log("sortBySpecies fishlist", fishList);
    }

    const sortByPlace = async () => {
        console.log("sortByPlace nappi painettu flatlist headerissä");
    }

    const sortByWeight = async () => {
        console.log("sortByWeight nappi painettu flatlist headerissä");
    }

    const sortByLength = async () => {
        console.log("sortByLength nappi painettu flatlist headerissä");
    }


    if (isLoading) {
        console.log("FishList isloading: ", isLoading);
        return <View><Text>Loading...</Text></View>;
    } else {
        console.log("FishList loaded and isloading: ", fishList, isLoading);
    

    return (
        <FlatList
        data={fishList}
        ListHeaderComponent={(<RenderListHeader sortBySpecies={sortBySpecies} sortByPlace={sortByPlace} sortByWeight={sortByWeight} sortByLength={sortByLength}/>)} 
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
    sortButton: {
        backgroundColor: '#d2d2d2',
        padding: 10,
        borderRadius: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        alignItems: 'flex-end',
        marginHorizontal: 10,
      },
      container: {
        //  flexGrow: 1,
          paddingTop: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          backgroundColor: '#24292e', //'black',
          flexDirection: 'row', // column is default row niin peräkkäin
          // ...
        },
});

export default FishList;
