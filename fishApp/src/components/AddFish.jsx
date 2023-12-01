import { View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native';

import useFishStorage from '../hooks/useFishStorage';

const AddFish = ({navigation}) => {

    const fishStorage = useFishStorage();

    const kala = {
        id: Date.now(),
        fullName: 'Kuha',
        weight: 5.2,
        length: 73,
        picture: 'gallery,...',
    };

    const onSubmit1 = async () => {
        const kala = {
            id: Date.now(),
            fullName: 'Kuha',
            weight: 5.2,
            length: 73,
            picture: 'gallery,...',
        };
        console.log("nappi1 painettu");
        console.log("Kala: ", kala);
        const fishList1 = await fishStorage.getFishList();
        console.log("Lista ennen lisäystä", fishList1);
        await fishStorage.addFish(kala);
        const fishList2 = await fishStorage.getFishList();
        console.log("Lista lisäyksen jälkeen", fishList2);
    }

    const onSubmit2 = async () => {
        console.log("nappi2 painettu");
        const fishList1 = await fishStorage.getFishList();
        console.log("Lista ennen poistoa", fishList1);
        await fishStorage.removeFishList();
        const fishList2 = await fishStorage.getFishList();
        console.log("Lista poiston jälkeen", fishList2);
    }
    



    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItem}>
                <Text style={styles.text}>AddFish flexitem 1</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.text}>AddFish flexitem 2</Text>
            </View>
            <View style={styles.flexItem}>
                <Pressable style={styles.opacity} onPress={onSubmit1}>  
                    <Text style={styles.text}>Nappi lisää</Text>
                </Pressable>
            </View>
            <View style={styles.flexItem}>
                <Pressable style={styles.opacity} onPress={onSubmit2}>  
                    <Text style={styles.text}>Nappi poista</Text>
                </Pressable>
            </View>
        </View>
    );
};

    const styles = StyleSheet.create({
      text: {
          color: 'black', 
          fontSize: 24, 
          fontWeight: '700',
          textAlign: 'center',
      },
      flexContainer: {
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        flexItem: {
          flexGrow: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        },
        opacity: {
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
      },
      textButton: {
        color: 'white', 
        fontSize: 24, 
        fontWeight: '700',
        backgroundColor: '#0366d6', // blue
        padding: 10,
        borderRadius: 10,
    },
  });
    export default AddFish;