import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import ViewForm from "./ViewForm";
import { useState } from "react";

function App() {
  const [formvalues, setFormValues] = useState([]);
  return (
    <div className="container-fluid">
      <div className="row main-box mx-5 mg1">
        <div className="col-lg-6 tt">
          <h3>Create Form</h3>
        </div>
        <div className="col-lg-6 tt">
          <h3>View Form</h3>
        </div>
      </div>
      <div className="row mx-5">
        <div className="col-lg-6 mg py-1 px-4">
          <Form setFormValues={setFormValues} formvalues={formvalues} />
        </div>
        <div className="col-lg-6 mg py-5 ">
          <ViewForm formvalues={formvalues} />
        </div>
      </div>
    </div>
  );
}

export default App;
