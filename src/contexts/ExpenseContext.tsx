import React, { ReactNode, useContext, useState } from "react"
import { Expense } from "../models/types";

interface IExpenseContext {
  expensesList: Expense[];
  addExpense: (expense: Expense) => void;
  updateExpense: (id: number, new_expense: Expense) => void;
  deleteExpense: (id: number) => void;
}

const ExpenseContext = React.createContext<IExpenseContext>({} as IExpenseContext)

// custom hook to expose the ExpenseContext
export function useExpense() {
  return useContext(ExpenseContext)
}

interface Props {
  children: ReactNode
}

export function ExpenseProvider({ children }: Props) {

  const expenseDefaults: Expense[] = [
    {
      id: 1,
      name: "Groceries",
      type: "Food",
      amount: 50.75,
    },
    {
      id: 2,
      name: "Electricity Bill",
      type: "Utilities",
      amount: 120.4,
    },
    {
      id: 3,
      name: "Gym Membership",
      type: "Subscription",
      amount: 45.99,
    },
    {
      id: 4,
      name: "Internet Subscription",
      type: "Utilities",
      amount: 60.0,
    },
  ];

  const [expensesList, setExpensesList] = useState<Expense[]>(expenseDefaults);

  function addExpense(expense: Expense) {
    expense.id = expensesList.length
      ? expensesList[expensesList.length - 1].id + 1
      : 0;
    setExpensesList([...expensesList, expense]);
  }

  function updateExpense(id: number, new_expense: Expense): void {
    setExpensesList(
      expensesList.map((ex) => {
        if (ex.id == id) return { ...new_expense, id: id };
        return ex;
      })
    );
  }

  function deleteExpense(id: number): void {
    setExpensesList(expensesList.filter((x) => x.id != id));
  }
  return (
    <ExpenseContext.Provider value={
      {
        expensesList: expensesList,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
      }
    }>
      {children}
    </ExpenseContext.Provider>
  )
}
