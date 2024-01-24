import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Routes, Route, useParams } from "react-router-dom";
import Form from "./Form";

function ViewForm({ formvalues }) {
  useEffect(() => {
    //   let fromValues =[...formDetails.data]
    console.log(formvalues);
  }, []);

  return (
    <div className="container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {formvalues.map((ele, index) => {
            return (
              
                <tr>
                  <th scope="row">{ele.name}</th>
                  <td>{ele.email}</td>
                  <td>{ele.country}</td>
                  <td>{ele.gridRadios}</td>
                  <td>{ele.dob}</td>
                  <td>{ele.message}</td>
                  
                </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewForm;
