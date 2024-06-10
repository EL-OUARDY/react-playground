import { useForm } from "react-hook-form"
import { Expense } from "../../types"

interface Props {
    addExpense: (ex: Expense) => void
}
function ExpensesForm({ addExpense }: Props) {

    const { register, handleSubmit, reset, watch } = useForm<Expense>({ defaultValues: { id: 0, name: "", amount: 1, type: "" } })

    const formObj = watch()

    function onSubmit(data: Expense): void {
        addExpense(data)
        resetForm()
    }

    function resetForm() {
        reset({ id: 0, name: "", amount: 1, type: "" })
    }

    return (
        <>
            <h5>Add New Expenses</h5>
            <hr />
            <div className="row">
                <form onSubmit={handleSubmit(onSubmit)} className="col-6">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input {...register("name")} type="text" className="form-control" id="name" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Expense Type:</label>
                        <select {...register("type")} className="form-select" id="type">
                            <option value="Utilities">Utilities</option>
                            <option value="Food">Food</option>
                            <option value="House">House</option>
                            <option value="Subscription">Subscription</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount:</label>
                        <input {...register("amount", { valueAsNumber: true })} type="number" className="form-control" id="amount" placeholder="" min={1} />
                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit" />
                    <input type="button" className="btn btn-secondary mx-2" value="Clear" onClick={resetForm} />
                </form>
                <div className="col-6">
                    <div className="alert alert-success" role="alert">
                        <pre className="text-secondary fs-6">
                            /* Expense Object */ <br />
                            {JSON.stringify(formObj, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpensesForm

