import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import useFishList from '../hooks/useFishList.js';

import OneFish from './OneFish.jsx';

const ItemSeparator = () => <View style={styles.separator} />;
/*
const renderItem = ({item, navigation})=> {
    return (
        <OneFish fullName={item.fullName} weight={item.weight} length={item.length} navigation={navigation}/>
    );
}*/

const FishList = ({navigation}) => {
    const fishList = useFishList();
    console.log(fishList)
    return (
        <FlatList
        data={fishList}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <OneFish item={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

export default FishList;

//        renderItem={renderItem(item, navigation)}
