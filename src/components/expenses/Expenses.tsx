import { Expense } from "../../types"
import ExpensesForm from "./ExpensesForm"
import ExpensesTable from "./ExpensesTable"
interface Props {
    expensesList: Expense[]
    addExpense: (ex: Expense) => void
    onUpdate: (id: number, ex: Expense) => void
    onDelete: (id: number) => void
}
function Expenses({ expensesList, addExpense, onUpdate, onDelete}: Props) {
    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-6"><ExpensesForm addExpense={addExpense} /></div>
                    <div className="col-6"><ExpensesTable onUpdate={onUpdate} onDelete={onDelete} expensesList={expensesList} /></div>
                </div>
            </div>
        </>
    )
}

export default Expenses
