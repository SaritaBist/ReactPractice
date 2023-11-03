import React from "react";
import { Formik, Form, Field } from "formik";
import "./FormData.css";
import * as yup from "yup";
import KErrorMessage from "./KErrorMessage";
let validationSchema= yup.object({
    name:yup.string().required("Name is required").max(50,"too long"),
    email:yup.string().required("Email is requires").min(3,"too Short").max(50,"Too long"),
    Number:yup.number().required("Number Required").max(9999999999,"Only 10 digits allowed"),
    password:yup.string().required().max(50,"Too long").matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$","Password must minimum 8 contains small"),
    
    repassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"), // Ensure that it matches the "password" field
})

function FormData() {
  return (
    <div className="container">
      <Formik
        initialValues={{ name: "", email: "", Number: "", password: "" ,repassword:""}}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationSchema}

      >
        <Form className="form">
          <div className="data">
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name"  className="input"/>
            <KErrorMessage name="name" />
          </div>

          <div className="data">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" className="input" />
            <KErrorMessage name="email" />
          </div>
          <div className="data">
            <label htmlFor="Number">Number:</label>
            <Field type="Number" id="Number" name="Number" className="input" />
            <KErrorMessage name="Number" />
          </div>
          <div className="data">
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password"  className="input" />
            <KErrorMessage name="password" />
          </div>
          <div className="data">
            <label htmlFor="password">Retype Password:</label>
            <Field type="repassword" id="repassword" name="repassword"  className="input" />
            <KErrorMessage name="repassword" />
          </div>

          <button type="Submit" className="btn">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormData;
