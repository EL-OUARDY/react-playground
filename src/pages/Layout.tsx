import Header from '../components/Header'
import { ExpenseProvider } from '../contexts/ExpenseContext'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="container-fluid">
            <ExpenseProvider>
                <Header />
                <div className="container-fluid">
                    <div className="row mt-4">
                        <Outlet />
                    </div>
                </div>
            </ExpenseProvider>
        </div>
    )
}

export default Layout
