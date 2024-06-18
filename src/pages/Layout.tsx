import Header from "../components/Header";
import { ExpenseProvider } from "../contexts/ExpenseContext";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* only render bootstrap for this layout
      - silly way, but it's just a practice playground */}
      <link
        rel="stylesheet"
        href="/node_modules/bootstrap/dist/css/bootstrap.min.css"
      />

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
    </>
  );
};

export default Layout;
