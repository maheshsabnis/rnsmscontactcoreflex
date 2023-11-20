import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
} from 'react-native';
import {CategoryService} from '../services/categoryservice';
const APICallComponent = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const serv = new CategoryService();

  useEffect(() => {
    serv
      .getCategories()
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(`Error Occurred : ${error}`);
      });
  }, [serv]);

  const saveData = () => {
    const cat = {
      CategoryId: 9090,
      CategoryName: 'Cat-9090',
      BasePrice: 78677,
    };

    serv
      .postCategory(cat)
      .then(response =>
        Alert.alert(
          `Data is Saved Successfully ${JSON.stringify(response.data)}`,
        ),
      )
      .catch(error => Alert.alert(`Error Occurred ${error}`));
  };

  if (categories.length === 0 || categories === undefined) {
    return <Text style={styles.text}>No data to show</Text>;
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        // categories.map((cat, index) => (
        //   <Text key={index} style={styles.textData}>
        //     {JSON.stringify(cat)}
        //   </Text>
        // ))
        <FlatList
          data={categories}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.CategoryId}, {item.CategoryName}, {item.BasePrice}
            </Text>
          )}
        />
      )}
      <Button title="Save Data" onPress={saveData}>
        Save Data
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    height: '100%',
    width: 100,
    position: 'absolute',
    alignSelf: 'stretch',
  },
  text: {
    width: '100%',
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },
  textData: {
    width: '100%',
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },
});
export default APICallComponent;
