import ExpensesForm from "./ExpensesForm"
import ExpensesTable from "./ExpensesTable"

function Expenses() {
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4"><ExpensesForm /></div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4"><ExpensesTable /></div>
            </div>
        </div>
    )
}

export default Expenses
