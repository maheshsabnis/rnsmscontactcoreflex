import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

function DDLPickerComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOpen = () => setIsOpen(!isOpen);
  const handleSelect = option => {
    setSelectedOption(option);
    // Alert.alert(option);
    /* EMit the Selected value */
    props.selectedValue(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        <Text>{selectedOption || props.title}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          {props.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelect(option)}
              style={styles.dropdownOption}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    alignSelf: 'stretch',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#ddd',
    alignSelf: 'stretch',
  },
  dropdown: {
    width: '100%',
    position: 'absolute',
    top: 40,
    left: 0,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  dropdownOption: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});
export default DDLPickerComponent;
