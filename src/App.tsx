import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Expenses from "./pages/Expenses";
import ExpensesTable from "./components/expenses/ExpensesTable";
import ExpensesForm from "./components/expenses/ExpensesForm";
import { ROUTES } from "./routes/routes";
import Shadcn from "./pages/Shadcn";

function App() {
  return (
    <>
      <Routes>
        {/* main routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Expenses />} />
          <Route path={ROUTES.expenses.list}>
            <Route index element={<ExpensesTable />} />
            <Route path={ROUTES.expenses.add} element={<ExpensesForm />} />
            <Route path={ROUTES.expenses.edit} element={<ExpensesForm />} />
          </Route>
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.notFound} element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* this route for practicing Shadcn */}
        <Route path={ROUTES.shadcn} element={<Shadcn />} />
      </Routes>
    </>
  );
}

export default App;
