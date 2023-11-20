export class ExpensesLogic {
  constructor (){
    this.expenses = [];
  } 

  getAllExpenses(){
    return this.expenses;
  }

  getExpensesById(id){
    return this.expenses.filter((e)=> {e.ExpensesId === id})[0]; 
  }

  recordExpenses(expense){
    this.expenses.push(expense);
    return this.expenses;
  }

  updateExpenses(id,expense){
    const newArray = this.expenses.map(item =>
        item.id === expense.id ? { ...this.expenses, expense } : item
      );
    return newArray;
  }

}