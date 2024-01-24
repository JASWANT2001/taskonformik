import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./Form";
import ViewForm from "./ViewForm"
import { useState } from "react";

function App() {
  const [formvalues, setFormValues] = useState([])
  return (
    <div className="container">
      <div className="row">
        <h3>Form</h3>
        <div className="col-lg-6 border border-dark">
          <Form setFormValues={setFormValues} formvalues={formvalues} />
        </div>
        <div className="col-lg-6 border border-dark">
          <ViewForm formvalues={formvalues} />
        </div>
      </div>
    </div>
  );
}

export default App;
