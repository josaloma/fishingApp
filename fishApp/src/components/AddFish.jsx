import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import React from 'react'


import useFishStorage from '../hooks/useFishStorage';

import { Formik, useField } from 'formik';

import * as yup from 'yup';

const initialValues = {
  id: '',
  species: '',
  weight: '',
  length: '',
  picture: '',
};

const validationSchema = yup.object().shape({
  species: yup
     .string()
     .required(),
   weight: yup
   .number()
   .required()
   .typeError("you must specify a number"),
     length: yup
     .number()
     .required()
     .typeError("you must specify a number"),
 });

const AddFishForm = ({ onSubmit }) => {

  const [speciesField, speciesMeta, speciesHelpers] = useField('species');
  const [weightField, weightMeta, weightHelpers] = useField('weight');
  const [lengthField, lengthMeta, lengthHelpers] = useField('length');
  const showSpeciesError = speciesMeta.touched && speciesMeta.error;
  const showWeightError = weightMeta.touched && weightMeta.error;
  const showLengthError = lengthMeta.touched && lengthMeta.error;

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="e.g. Trout"
        value={speciesField.value}
        onChangeText={text => speciesHelpers.setValue(text)}
        onBlur={() => speciesHelpers.setTouched(true)}
      />
      {showSpeciesError && <Text style={styles.errorText}>{speciesMeta.error}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder="Weight (kg)"
        value={weightField.value}
        onChangeText={text => weightHelpers.setValue(text)}
        onBlur={() => weightHelpers.setTouched(true)}
      />
      {showWeightError && <Text style={styles.errorText}>{weightMeta.error}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder="length (cm)"
        value={lengthField.value}
        onChangeText={text => lengthHelpers.setValue(text)}
        onBlur={() => lengthHelpers.setTouched(true)}
      />
      {showLengthError && <Text style={styles.errorText}>{lengthMeta.error}</Text>}
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

  const fishStorage = useFishStorage();

  const onSubmit = async ( values ) => {
    const kala = {
      id: Date.now(),
      species: values.species,
      weight: values.weight,                //parseFloat(values.weight)
      length: values.length,    //parseFloat(values.length)
      picture: 'Galleria WOW',
    };
    //const species = values.species
    //const weight = parseFloat(values.weight);
    //const length = parseFloat(values.length);
    console.log("nappi addFish painettu");
    console.log("Kala: ", kala);
        const fishList1 = await fishStorage.getFishList();
        console.log("Lista ennen lisäystä", fishList1);
        await fishStorage.addFish(kala);
        const fishList2 = await fishStorage.getFishList();
        console.log("Lista lisäyksen jälkeen", fishList2);
  };


  return (
    <Formik initialValues={initialValues}  validationSchema={validationSchema} 
      onSubmit={(values , {resetForm} ) => { onSubmit(values); resetForm({ values: ''});}}>
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
  errorText: {
    color: 'red', 
    fontSize: 14, 
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