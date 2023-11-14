import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from "./KErrorMessage";
function FormikDemo() {
  const validationSchema = yup.object({
    name:yup.string().required("name is required field"),
    psw:yup.string().required().matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    age: yup.number().min(10000000000,"Not valid number").max(99999999999,"Not valid Number").required(),
    gender:yup.string().required(),
    dob: "",
    sub:yup.string().required(),
    about: yup.string().required(),
  });
  return (
    <>
      <Formik
        initialValues={{ name: "",psw:"", age: "", gender: "",sub:"", dob: "", about: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" type="text" />
          <KErrorMessage name="name"/>
          <br />
          <br />


          <label htmlFor="age">Number</label>
          <Field name="age" type="Number" id="age" />
          <KErrorMessage name="age"/>
          <br />
          <br />

          <label htmlFor="psw">Password</label>
          <Field name="psw" id="psw" type="password" />
          <KErrorMessage name="psw"/>
          <br />
          <br />

          <label htmlFor="gender">Gender</label>
          <br />
          <br />
          <label htmlFor="male">Male</label>
          <Field name="gender" type="radio" value="male" id="male" />

          <label htmlFor="female">Female</label>
          <Field name="gender" type="radio" id="female" value="female" />
          <KErrorMessage name="gender"/>
          <br />
          <br />

          <label htmlFor="dob">Birth Date</label>
          <Field name="dob" type="date" id="dob" />
          <KErrorMessage name="dob"/>
          <br />
          <br />

          <label htmlFor="sub">Subjects</label>
          <Field name="sub" as="select" id="sub">
            <option value="Java">Java</option>
            <option value="JavaScirpt">JavaScript</option>
          </Field>
          <KErrorMessage name="sub"/>


          <br />
          <br />
          <label htmlFor="about">Birth Date</label>
          <Field name="about" as="textarea" id="about" />
          <KErrorMessage name="about"/>
          <br />
          <br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default FormikDemo;
