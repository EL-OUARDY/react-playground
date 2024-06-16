import { NavLink } from "react-router-dom"
import logo from "../assets/react.svg"
import { useExpense } from "../contexts/ExpenseContext"
import { ROUTES } from "../routes/routes"

function Header() {
    const { expensesList } = useExpense()
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
                    <NavLink to={"/"} className={"d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"}>
                        <img className="bi me-2" width="40" height="32" src={logo} />
                        <span className="mx-2 fw-bold">React Playground</span>
                    </NavLink>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" >
                        <li>
                            <NavLink to={"/"} className={"nav-link px-2 text-white px-3"}>Home</NavLink>
                        </li>
                        <li><NavLink to={ROUTES.expenses.list} className={"nav-link px-2 text-white px-3"}>Expenses</NavLink></li>
                        <li><NavLink to={ROUTES.about} className={"nav-link px-2 text-white px-3"}>About</NavLink></li>
                        <li><NavLink to={ROUTES.contact} className={"nav-link px-2 text-white px-3"}>Contact</NavLink></li>
                    </ul>
                    <a href="#" className="px-2 text-white text-decoration-none">Expenses <span className="badge bg-primary">{expensesList.length}</span></a>

                </div>
            </div>
        </header>
    )
}

export default Header
