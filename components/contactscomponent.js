import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform
} from 'react-native';
/* Contacts: An Object that is used to interact with Contact Store in the Application */
import Contacts from 'react-native-contacts';
import ContactItem from './contactinems';
const ContactsComponent = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    /* When the app is mounted
    1. Check for the Target Platform i.e. Platform.OS === 'android'
    */
    if (Platform.OS === 'android') {
      /* 2: Request for Permission */
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        /* Async Access of Operation for Contact */
        // eslint-disable-next-line no-shadow
        Contacts.getAll().then(contacts => {
          Alert.alert(`Done`);
          setContacts(contacts);
        });
      });
    } else {
      Contacts.getAll().then(contacts => {
        Alert.alert(`Done`);
        setContacts(contacts);
      });
     
    }
  }, []);
  /* Call this method on button click */
  const createContact = () => {
    /* Create a */
        Contacts.addContact({
         /* Set Contect  Info as JSON */
        }).then().catch();
    };
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <ContactItem contact={item} />;
  };

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  contactlist: {
    flex: 1,
  },
});

export default ContactsComponent;
