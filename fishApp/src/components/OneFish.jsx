import { View,  Text, Pressable, StyleSheet  } from 'react-native';

import useFishStorage from '../hooks/useFishStorage';

const OneFish = ({ item, navigation }) => {
    
    const fishStorage = useFishStorage();
    //console.log("One Fish item:", item);

    const onSubmit = async () => {
        console.log("alue painettu siirtyykö Fishdetailisiin?");
        console.log("oneFish item:", item);
        navigation.navigate("FishDetails",{item: item,});
        const fishList = await fishStorage.getFishList();
        console.log(fishList)
    }
 
    return (
        <Pressable onPress={onSubmit}>
            <View style={styles.flexContainer}>
                <View style={styles.flexItem}>
                    <Text style={styles.text}>{item.fullName}</Text>
                </View> 
                <View style={styles.flexItem}>
                    <Text style={styles.text}>{item.weight}</Text>
                </View>
                <View  style={styles.flexItem}>
                    <Text style={styles.text}>{item.length}</Text>
                </View>
            </View>
        </Pressable> 
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black', 
        fontSize: 24, 
        fontWeight: '700',
        textAlign: 'left', // 'center'
    },
    flexContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column', // 'row'
      },
      flexItem: {
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'left',
        justifyContent: 'center',
      },
});

export default OneFish;

