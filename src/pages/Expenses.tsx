import ExpensesForm from "../components/expenses/ExpensesForm"
import ExpensesTable from "../components/expenses/ExpensesTable"

function Expenses() {
    return (
        <>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-4"><ExpensesForm /></div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-4"><ExpensesTable /></div>
        </>
    )
}

export default Expenses
