import './App.css'
import Header from "./components/Header"
import Expenses from './components/expenses/Expenses'
import { useState } from 'react'
import { Expense } from './types'

function App() {
  const expenses: Expense[] = [
    {
      id: 1,
      name: 'Groceries',
      type: 'Food',
      amount: 50.75
    },
    {
      id: 2,
      name: 'Electricity Bill',
      type: 'Utilities',
      amount: 120.40
    },
    {
      id: 3,
      name: 'Gym Membership',
      type: 'Subscription',
      amount: 45.99
    },
    {
      id: 4,
      name: 'Internet Subscription',
      type: 'Utilities',
      amount: 60.00
    }
  ]
  const [expensesList, setExpensesList] = useState<Expense[]>(expenses)

  function addExpense(ex: Expense) {
    ex.id = expensesList.length ? expensesList[expensesList.length - 1].id + 1 : 0
    setExpensesList([...expensesList, ex])
  }

  function updateExpense(id: number, ex: Expense): void {
    ex.name += " *"
    setExpensesList(expensesList.map(old_ex => {
      if (old_ex.id == id)
        return { ...old_ex, ...ex }
      else
        return old_ex
    }))

  }

  function deleteExpense(id: number): void {
    setExpensesList(expensesList.filter(x => x.id != id))
  }

  return (
    <>
      <div className="container-fluid">
        <Header expensesCount={expensesList.length} />
        <Expenses expensesList={expensesList} addExpense={addExpense} onUpdate={updateExpense} onDelete={deleteExpense} />
      </div>
    </>
  )
}

export default App
