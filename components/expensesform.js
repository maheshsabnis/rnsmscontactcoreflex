import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, View, TextInput, Button, Text, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ExpensesLogic} from './../logic';
import {Expenses} from '../models/expenses';
import DDLPickerComponent from './ddpickerComponent';
import {
  ExpensesHeads,
  ExpensesSubHeads,
  Users,
  PaymentMethods,
} from '../constants/expensesheads';

function ExpensesForm() {
  const [openExpensesHead, setOpenExpensesHead] = useState(false);
  const [openExpensesSubHead, setOpenExpensesSubHead] = useState(false);
  const [openPaidBy, setOpenPaidBy] = useState(false);
  const [openPaymentType, setOpenPaymentType] = useState(false);
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [expense, setExpense] = useState({
    ExpensesId: '',
    ExpensesHead: '',
    ExpensesSubHead: '',
    ExpensesDetails: '',
    PaidBy: '',
    PaidTo: '',
    PaidAmount: '',
    PaidDate: new Date(),
    PaymentType: '',
  });
  const [users, setPaidBy] = useState(Users);
  const [expensesHeads, setExpensesHeads] = useState(ExpensesHeads);
  const [expensesSubHeads, setExpensesSubHeads] = useState(ExpensesSubHeads);
  const [paymentMethods, setPaymentMethods] = useState(PaymentMethods);

  const saveExpenses = () => {
    Alert.alert('ddd');
  };

  return (
    <View style={styles.container}>
      <Text>Expenses Id</Text>
      <TextInput
        style={styles.textInput}
        value={expense.ExpensesId}
        onChangeText={text => setExpense({...expense, ExpensesId: text})}
      />
      <Text>Expenses Head</Text>
      <DDLPickerComponent
        options={expensesHeads}
        title={'Select Expenses Head'}
      />
      <Text>Expenses Sub Head</Text>
      <DDLPickerComponent
        options={expensesSubHeads}
        title={'Select Expenses Sub Head'}
      />
      <Text>Expenses Details</Text>
      <TextInput
        style={styles.textInput}
        value={expense.ExpensesDetails}
        onChangeText={text => setExpense({...expense, ExpensesDetails: text})}
      />
      <Text>Paid By</Text>
      <DDLPickerComponent options={users} title={'Select User'} />
      <Text>Paid To</Text>
      <TextInput
        style={styles.textInput}
        value={expense.PaidTo}
        onChangeText={text => setExpense({...expense, PaidTo: text})}
      />
      <Text>Paid Amount</Text>
      <TextInput
        style={styles.textInput}
        value={expense.PaidAmount}
        onChangeText={text => setExpense({...expense, PaidAmount: text})}
      />
      <Text>Paid Date</Text>
      {/* <TextInput style={styles.textInput}></TextInput> */}
      {/* <DatePicker
        modal
        open={openDatePicker}
        date={expense.PaidDate}
        onConfirm={date => {
          setOpenDatePicker(false);
          setExpense({...expense, PaidDate: date});
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      /> */}
      <Text>Payment Type</Text>
      <DDLPickerComponent
        options={paymentMethods}
        titie={'Select Payment Method'}
      />
      <Button
        title="Record Expenes"
        style={styles.button}
        onPress={saveExpenses}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view: {
    width: 100,
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
export default ExpensesForm;
