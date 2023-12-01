import AsyncStorage from '@react-native-async-storage/async-storage';

class FishStorage {
  constructor(namespace = 'fish') {
    this.namespace = namespace;
  }

  async getFishList() {
    // Get the access token for the storage
    const fishList = await AsyncStorage.getItem(
      `${this.namespace}:fishList`,
    );
    return fishList ? JSON.parse(fishList) : [];
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
