/* eslint-disable */
import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Posts} from '../models/data';
const FlatListComponent = () => {
  const [posts, setPosts] = useState(Posts);
  return (
    <View style={styles.container}>
      <FlatList
          data={posts}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
            {item.heading}, {item.topic}
            </Text>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 10,
    fontFamily: 'Times New Roman',
  },
});

export default FlatListComponent;
