import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import React from 'react'


//import useFishStorage from '../hooks/useFishStorage';

import { Formik, useField } from 'formik';

const initialValues = {
  id: '',
  fullName: '',
  weight: '',
  length: '',
  picture: '',
};

const AddFishForm = ({ onSubmit }) => {

  const [speciesField, speciesMeta, speciesHelpers] = useField('species');
  const [massField, massMeta, massHelpers] = useField('mass');
  const [heightField, heightMeta, heightHelpers] = useField('height');

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="e.g. Trout"
        value={speciesField.value}
        onChangeText={text => speciesHelpers.setValue(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Weight (kg)"
        value={massField.value}
        onChangeText={text => massHelpers.setValue(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Height (m)"
        value={heightField.value}
        onChangeText={text => heightHelpers.setValue(text)}
      />
      <Pressable style={({pressed}) => [{
        backgroundColor: pressed ? 'gray' : 'white',
        }, styles.pressable ]}
        onPress={onSubmit}>
        <Text style={styles.text}>Add Fish</Text>
      </Pressable>
    </View>
  );
};

const AddFish = ({navigation}) => {

  //const fishStorage = useFishStorage();

  const onSubmit = (values) => {
    //const mass = parseFloat(values.mass);
    //const height = parseFloat(values.height);
    console.log("nappi addFish painettu");
    console.log("Kala: ", values);
        /*const fishList1 = await fishStorage.getFishList();
        console.log("Lista ennen lisäystä", fishList1);
        await fishStorage.addFish(kala);
        const fishList2 = await fishStorage.getFishList();
        console.log("Lista lisäyksen jälkeen", fishList2);*/
  };


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <AddFishForm onSubmit={handleSubmit} />}
      </Formik>
    

    );
};  
/*   <View style={styles.flexContainer}>
      <View style={styles.flexItem}>
        <Text style={styles.text}>Nappi poista</Text>
      </View>

    </View>  
      
*/
const styles = StyleSheet.create({
  text: {
    color: 'black', 
    fontSize: 24, 
    fontWeight: '700',
    textAlign: 'center',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
        //height: '50%',
        //backgroundColor: 'white', // blue
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
})
export default AddFish;