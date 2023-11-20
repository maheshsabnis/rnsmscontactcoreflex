import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Contacts from 'react-native-contacts';
import ContactItem from './contactinems';
const ContactsComponent = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
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
