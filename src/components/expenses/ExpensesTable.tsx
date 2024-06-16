import { NavLink, useLocation } from "react-router-dom"
import { useExpense } from "../../contexts/ExpenseContext"
import { Expense } from "../../models/types"
import { ROUTES } from "../../routes/routes"

function ExpensesTable() {
    const { expensesList, deleteExpense } = useExpense()

    // get the state object passed by navigate method
    const location = useLocation();
    const state = location.state;

    return (
        <>
            <h5 className="mb-3">Your Expenses List</h5>
            <hr />
            {expensesList.length > 0 && (
                <>
                    {state && <div className="alert alert-success text-center"> {state.msg} </div>}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Expense</th>
                                <th scope="col">Type</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expensesList.map((x: Expense) => (
                                <tr key={x.id}>
                                    <th scope="row">{x.id}</th>
                                    <td>{x.name}</td>
                                    <td>{x.type}</td>
                                    <td>${x.amount}</td>
                                    <td>
                                        <NavLink to={ROUTES.expenses.edit.replace(':id', x.id.toString())} className={"btn text-danger p-0 px-1 mx-1"} >Edit</NavLink>
                                        <a onClick={() => deleteExpense(x.id)} className="btn text-danger p-0 px-1 mx-1">Remove</a>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="text-center" colSpan={5}>
                                    <b>Total: </b>
                                    <span className="fw-bold text-success">
                                        ${expensesList.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
            {expensesList.length == 0 && (<h5 className="alert alert-secondary text-center">You don't have any expenses yet 😊</h5>)}
        </>
    )
}

export default ExpensesTable
