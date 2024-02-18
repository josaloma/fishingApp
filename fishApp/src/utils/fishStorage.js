import AsyncStorage from '@react-native-async-storage/async-storage';

class FishStorage {
  constructor(namespace = 'fish') {
    this.namespace = namespace;
  }

  async getFishList(sortMethod) {
    // Get the access token for the storage
    try {
      const fishList = await AsyncStorage.getItem(
        `${this.namespace}:fishList`,
      );
      const serializedFishList = JSON.parse(fishList);
      //console.log("Namespace: ", `${this.namespace}:fishList`)
      console.log("sortMethod: ", sortMethod)
      if (sortMethod == "date") {
        return fishList ? serializedFishList : [];
      } else if (sortMethod == "species") {
        const sortedFishList = serializedFishList.sort((a, b) => a.species.localeCompare(b.species));
        return fishList ? sortedFishList : [];
      }

    } catch(e) {
      console.log("Error retrieving fishlist from asyncstorage: ", e); 
    }
  }

  async setFishList(fishList) {
    //console.log("FishList tulostus setFishList-funktiossa", fishList)
    // Add the access token to the storage
    await AsyncStorage.setItem(
      `${this.namespace}:fishList`,
      JSON.stringify(fishList),
    );
  }

  async addFish(fish) {
     //console.log("lisättävä fish addFish-funktiossa", fish)
    const currentFishList = await this.getFishList();
    const newFishList = [...currentFishList, fish];
    //console.log("newFishList addFish-funktiossa", newFishList)
    await AsyncStorage.setItem(
      `${this.namespace}:fishList`,
      JSON.stringify(newFishList),
    );
  }

  async removeFishList() {
    await AsyncStorage.removeItem(`${this.namespace}:fishList`);
  }
}

export default FishStorage;
