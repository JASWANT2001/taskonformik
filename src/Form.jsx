import React from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import ViewForm from "./ViewForm";

function Form({ formvalues, setFormValues }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      gridRadios: "",
      dob: "",
      message: "",
    },
    onSubmit: (values, reset) => {
      setFormValues([...formvalues, values]);
      reset.resetForm();
    },
  });

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mt-3">
            <label htmlFor="text" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-label"
              id="text"
              placeholder="Enter Your Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="text" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-label"
              id="text"
              placeholder="Enter Your Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="text" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-label"
              id="text"
              placeholder="Enter Your Country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="text" className="form-label">
              Gender
            </label>
            <div className="col-lg-6 mt-1">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked={formik.values.gridRadios === "male"}
                onClick={formik.handleChange}
              />
              <label className="form-check-label" for="gridRadios1">
                Male
              </label>
            </div>
            <div className="col-lg-6 mt-1">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                //   value="option1"
                checked
                value={formik.values.gridRadios}
                onClick={formik.handleChange}
              />
              <label className="form-check-label" for="gridRadios1">
                Female
              </label>
            </div>
            <div className="row mt-3">
              <label htmlFor="date" className="form-label">
                Date Of Birth
              </label>
              <input
                type="date"
                className="form-label"
                id="text"
                placeholder="Enter Date"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
              />
            </div>
            <div className="row mt-3">
              <label htmlFor="text" className="form-label">
                Message
              </label>
              <textarea
                type="text"
                className="form-label"
                id="text"
                placeholder="Enter Your Message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
            </div>
            <div className="row col-lg-4 mb-2">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="container">
        <ViewForm formvalues={formvalues}></ViewForm>
      </div> */}
    </>
  );
}

export default Form;
