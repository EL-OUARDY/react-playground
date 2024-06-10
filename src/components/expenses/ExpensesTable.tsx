import { Expense } from "../../types"

interface Props {
    expensesList: Expense[]
    onUpdate: (id: number, ex: Expense) => void
    onDelete: (id: number) => void
}
function ExpensesTable({ expensesList, onUpdate, onDelete }: Props) {
    return (
        <>
            <h5>Your Expenses List</h5>
            <hr />
            {expensesList.length > 0 && (
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
                                    <a onClick={() => onUpdate(x.id, x)} className="btn text-danger p-0 px-1 mx-1">Edit</a> |
                                    <a onClick={() => onDelete(x.id)} className="btn text-danger p-0 px-1 mx-1">Remove</a>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className="text-center" colSpan={5}>
                                <b>Total: </b>
                                <span className="fw-bold text-success">
                                    ${expensesList.reduce((acc, curr) => acc + curr.amount, 0)}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>)}
            {expensesList.length == 0 && (<h5 className="alert alert-secondary text-center">You don't have any expenses yet 😊</h5>)}
        </>
    )
}

export default ExpensesTable
