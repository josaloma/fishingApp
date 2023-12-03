import { View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native';

import useFishStorage from '../hooks/useFishStorage';
//navigation.navigate("Testi")}>
//console.log("Settingissä Nappi painettu")}>  

const Settings = ({navigation}) => {

    const fishStorage = useFishStorage();

    const onSubmit1 = async () => {
        const kala = {
            id: Date.now(),
            species: 'Kuha',
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
                <Text style={styles.text}>Settings flexitem 1</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.text}>Settings flexitem 2</Text>
            </View>
            <View style={styles.flexItem}>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? 'gray' : 'white',
                    }, styles.pressable ]}
                onPress={() => console.log("Settingissä Nappi painettu")}>  
                    <Text style={styles.text}>Nappi</Text>
                </Pressable>
            </View>
            <View style={styles.flexItem}>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? 'gray' : 'white',
                    }, styles.pressable ]} 
                    onPress={onSubmit2}>  
                    <Text style={styles.text}>Nappi poista</Text>
                </Pressable>
            </View>
            <View style={styles.flexItem}>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? 'gray' : 'white',
                    }, styles.pressable ]}
                    onPress={onSubmit1}>  
                    <Text style={styles.text}>Nappi lisää</Text>
                </Pressable>
            </View>
        </View>
    );
};

/*                */

const styles = StyleSheet.create({
    text: {
        color: 'black', 
        fontSize: 24, 
        fontWeight: '700',
        textAlign: 'center',
        backgroundColor: 'white',
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
    pressable: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
          //height: '50%',
          //backgroundColor: 'white', // blue
    },
    textButton: {
        color: 'black', 
        fontSize: 24, 
        fontWeight: '700',
        backgroundColor: 'white', // blue
        padding: 10,
        borderRadius: 10,
    },
});

export default Settings;