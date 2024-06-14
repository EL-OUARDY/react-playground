import './App.css'
import Header from "./components/Header"
import Expenses from './components/expenses/Expenses'
import { ExpenseProvider } from './contexts/ExpenseContext'

function App() {

  return (
    <>
      <div className="container-fluid">
        <ExpenseProvider>
          <Header />
          <Expenses />
        </ExpenseProvider>
      </div>
    </>
  )
}

export default App
