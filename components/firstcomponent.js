import React from 'react';
import {Alert, Button, View} from 'react-native';
function FirstComponent(props) {
  return (
    <View>
      <Button
        title="Click Me"
        onPress={() => Alert.alert(`Hello Mahesh : ${props.name}`)}
      />
    </View>
  );
}

export default FirstComponent;
