import { Link, Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Contact from "../../pages/Contact";
import ChartAndMap from "../../pages/ChartAndMap";
import CreateUpdateContact from "../CreateContact";


function Layout() {
  return (
    <div className="flex w-full min-h-screen">
      <nav className="w-1/5 shadow-xl">
        <ul>
          <li className="pl-10 py-6 border-b">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="pl-10 py-6">
            <Link to="/chart">Charts and Maps</Link>
          </li>
        </ul>
      </nav>
      <div className="w-4/5">
      <Routes>
      <Route
        path="/"
        element={<Navigate to="/contact" replace />}
      />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-contact" element={<CreateUpdateContact />} />
        <Route path="/contact/:contactID" element={<CreateUpdateContact />} />
        <Route path="/chart" element={<ChartAndMap />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default Layout;
