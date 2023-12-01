//import { createContext } from 'react';
import { useContext } from 'react'; 
import FishStorageContext from '../contexts/fishStorageContext';

const useFishStorage = () => {

  return useContext(FishStorageContext);

};

export default useFishStorage;

/*const useTestStorage = () => {

  return useContext(TestStorageContext);

};*/
