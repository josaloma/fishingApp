import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const FishDetails = ({route, navigation}) => {

    //console.log("FishDetails item:", route.params.item);
    const { item } = route.params;
    const onSubmit = async () => {
        console.log("alue painettu takaisin Fishlistiin ");
        navigation.navigate("FishList");
    }

    return (
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
            <View style={styles.flexItem}>
                <TouchableOpacity style={styles.opacity} onPress={onSubmit}>  
                    <Text style={styles.text}>Takaisin</Text>
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
    export default FishDetails;
    /* 
            */