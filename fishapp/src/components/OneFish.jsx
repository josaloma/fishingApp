import { View,  Text, Pressable, StyleSheet  } from 'react-native';

const OneFish = ({ fullName, weight, length }) => {

    const onSubmit = async () => {
        console.log("alue painettu");
    }
 
    return (
        <Pressable onPress={onSubmit}>
            <View style={styles.flexContainer}>
                <View style={styles.flexItem}>
                    <Text style={styles.text}>{fullName}</Text>
                </View> 
                <View style={styles.flexItem}>
                    <Text style={styles.text}>{weight}</Text>
                </View>
                <View  style={styles.flexItem}>
                    <Text style={styles.text}>{length}</Text>
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
        textAlign: 'center',
    },
    flexContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row', //, StyleSheet 
      },
      flexItem: {
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default OneFish;

