import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import useFishList from '../hooks/useFishList.js';

import OneFish from './OneFish';

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({item})=> {
    return (
        <OneFish fullName={item.fullName} weight={item.weight} length={item.length}/>
    );
}

const Home = ({navigation}) => {
    const fishList = useFishList();
    console.log(fishList)
    return (
        <FlatList
        data={fishList}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

export default Home;