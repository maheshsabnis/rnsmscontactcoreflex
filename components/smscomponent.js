import React, {useState} from 'react';
import {View, Text, Button, TextInput, Alert, StyleSheet} from 'react-native';
/* Importing the SMS Package */
import SendSMS from 'react-native-sms';

const SMSComponent = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [bodySMS, setBodySMS] = useState('');
  const sendSMS = () => {
    if (mobileNumber.length !== 10) {
      Alert.alert(`The Mobile Number : ${mobileNumber} is invalid`);
      return;
    }
    SendSMS.send(
      {
        /* SMS Details */
        body: bodySMS,
        recipients: [mobileNumber],
        successTypes: ['send', 'queued'],
      },
      /* SMS Callback that will specifiy the Status of SMS */
      (completed, cancelled, error) => {
        if (completed) {
          Alert.alert('SMS sent completed');
        } else if (cancelled) {
          Alert.alert('SMS sent cancelled');
        } else if (error) {
          Alert.alert('Some Error Occurred');
        }
      },
    );
  };
  return (
    <View style={{flex: 1}}>
      <Text style={styles.text}>Enter Target Number:</Text>
      <TextInput
        style={styles.textInput}
        value={mobileNumber}
        onChangeText={number => setMobileNumber(number)}
      />
      <Text style={styles.text}>Message Body:</Text>
      <TextInput
        style={styles.textInput}
        value={bodySMS}
        onChangeText={message => setBodySMS(message)}
      />
      <Button title="Send SMS" onPress={sendSMS}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '400',
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },
  text: {
    width: '400',
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },
});

export default SMSComponent;
