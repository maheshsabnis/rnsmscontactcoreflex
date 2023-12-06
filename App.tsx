import React from 'react';
import {StyleSheet, View} from 'react-native';

// import DDLPickerComponent from './components/ddpickerComponent';
// import ExpensesForm from './components/expensesform';
// import DDLUser from './components/ddluser';
import APICallComponent from './components/apicallcomponent';
// import SMSComponent from './components/smscomponent';
// import ContactsComponent from './components/contactscomponent';
// import CameraAccessComponent from './components/cameraaccess';
  import FlatListComponent from './components/flatlistcomponent';
function App(): JSX.Element {
  // const data = ['Maharashtra', 'Gujarat', 'Kerla'];
  // return <ExpensesForm />;
  // return <DDLUser />;
  // return <APICallComponent />;
  // return <SMSComponent />;
  // return <ContactsComponent />;
  // return <CameraAccessComponent />;
   return <FlatListComponent />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 30,
    width: 80,
    backgroundColor: 'red',
    color: 'yellow',
    borderColor: 'red',
  },
  text: {
    height: 50,
    width: 100,
    color: 'red',
    fontSize: 15,
    alignContent: 'left',
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    width: 400,
    borderWidth: 2,
  },
});


export default App;
