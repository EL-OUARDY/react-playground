import logo from "../assets/react.svg"

interface Props {
    expensesCount: number
}

function Header({ expensesCount }: Props) {
    return (
        <>
            <header className="p-3 bg-dark text-white">
                <div className="container-fluid">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img className="bi me-2" width="40" height="32" src={logo} />
                            <span className="mx-2 fw-bold">React Playground</span>
                        </a>

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" >
                            <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Services</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Contact</a></li>
                        </ul>
                        <a href="#" className="px-2 text-white text-decoration-none ms-auto">Expenses <span className="badge bg-primary">{expensesCount}</span></a>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
