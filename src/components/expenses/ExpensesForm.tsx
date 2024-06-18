import { useForm } from "react-hook-form"
import { Expense } from "../../models/types"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useExpense } from "../../contexts/ExpenseContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { ROUTES } from "../../routes/routes"


const schema = z.object({
    name: z.string().min(1, "Name is required!"),
    amount: z.number({ invalid_type_error: "Amount is required!" }).min(1, "Amount is not valid!"),
    type: z.string().min(1, "Type is required!")
})

function ExpensesForm() {

    const { addExpense, updateExpense, expensesList } = useExpense()

    const { register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm<Expense>({
        defaultValues: { id: 0, name: "", type: "" },
        resolver: zodResolver(schema)
    })

    const formObj = watch()

    const { id } = useParams()

    const navigate = useNavigate()


    useEffect(() => {
        // get expense object if the form is in the edit mode
        if (id) {
            const expense = (expensesList.find(x => x.id === Number(id)))

            if (expense)
                reset(expense)
            else // wrong id
                navigate(ROUTES.notFound)
        }

    }, [id, expensesList, reset, navigate]);

    function onSubmit(data: Expense): void {
        if (!id) {

            addExpense(data)
            resetForm()
        }
        else {
            updateExpense(Number(id), data)
            navigate(ROUTES.expenses.list, { state: { msg: `Expense ${id} Has Been Updated!` } })

        }
    }
    function resetForm() {
        reset()
    }

    return (
        <>
            <div className="mb-2">
                {!id && <h5>Add New Expenses</h5>}
                {id && <h5>Edit Expense With ID : {id}</h5>}
            </div>

            <hr />
            <div className="row">
                <form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 col-sm-12 col-md-6 mb-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input {...register("name")} type="text" className="form-control" id="name" placeholder="" />
                        {errors.name && (<p className="text-danger">{errors.name.message}</p>)}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Expense Type:</label>
                        <select {...register("type")} className="form-select" id="type">
                            <option value="Utilities">Utilities</option>
                            <option value="Food">Food</option>
                            <option value="House">House</option>
                            <option value="Subscription">Subscription</option>
                        </select>
                        {errors.type && (<p className="text-danger">{errors.type.message}</p>)}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount:</label>
                        <input {...register("amount", { valueAsNumber: true })} type="number" step={0.01} className="form-control" id="amount" min={1} />
                        {errors.amount && (<p className="text-danger">{errors.amount.message}</p>)}

                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit" />
                    { !id && <input type="button" className="btn btn-secondary mx-2" value="Clear" onClick={resetForm} />}
                </form>
                <div className="col-lg-6 col-sm-12 col-md-6 mb-3">
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

