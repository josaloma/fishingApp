import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const AddFish = ({navigation}) => {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItem}>
                <Text style={styles.text}>AddFish flexitem 1</Text>
            </View>
            <View style={styles.flexItem}>
                <Text style={styles.text}>AddFish flexitem 2</Text>
            </View>
            <View style={styles.flexItem}>
                <TouchableOpacity style={styles.opacity} onPress={() => console.log("Settings Nappi painettu")}>  
                    <Text style={styles.text}>Nappi</Text>
                </TouchableOpacity>
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