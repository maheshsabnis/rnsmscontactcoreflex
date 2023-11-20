import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DDLPickerComponent from './ddpickerComponent';

const DDLUser = () => {
  const [names, setNames] = useState([
    'Tejas',
    'Mahesh',
    'Ramesh',
    'Ram',
    'Sabnis',
  ]);
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected Name: {name}</Text>
      <Text>
        {'\n'}
        {'\n'}
        {'\n'}
      </Text>
      <View style={{flex: 3}}>
        <DDLPickerComponent
          options={names}
          title={'Select Name'}
          selectedValue={value => setName(value)}
        />
      </View>
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
});

export default DDLUser;
