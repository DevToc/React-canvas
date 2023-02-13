import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import SaleReportList from "./pages/SaleReportList";
import FormWizard from "./pages/workspace";
import Background from '../src/pages/Background';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <Sidebar />
          </div>
          <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <Routes>
              <Route path="/" element={<FormWizard />}/>
              <Route path="workspace" element={<FormWizard />} />
              <Route path="Background" element={<Background />} />
              {/* <Route path="employee_list" element={<EmployeeList />} />
              <Route path="sale_report_list" element={<SaleReportList />} /> */}
              {/* </Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )

}

export default App;
