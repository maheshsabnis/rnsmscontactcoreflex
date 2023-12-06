/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ContactsComponent from './components/contactscomponent';
import SMSComponent from './components/smscomponent';
 

AppRegistry.registerComponent(appName, () => SMSComponent);
