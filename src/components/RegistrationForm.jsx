import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
//Components
import FormikControler from './FormikControler';
import { gender, checkboxOptions } from './Data';
import { cities } from './Data/cities';

function RegistrationForm() {
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    skills: [],
    date: null,
    phone: '',
    city: '',
    address: '',
    textarea: ''
  };

  
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format ').required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
    gender: Yup.string().required('Required'),
    date: Yup.date().required('Required').nullable(),
    city: Yup.string().required('Required'),
    phone: Yup.string()
      .required('Invalid phone number')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
      ),
      address: Yup.string().required('Required'),
      textarea: Yup.string().required('Required')
  });

  const onSubmit = (values) => {
    console.log('Saved data:', JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="form">
            <div className="container">
              <div className="first">
                <FormikControler
                  type="text"
                  control="input"
                  name="fullName"
                  label="Full name"
                />

                <FormikControler
                  type="email"
                  control="input"
                  name="email"
                  label="Email"
                />

                <FormikControler
                  type="password"
                  control="input"
                  name="password"
                  label="Password"
                />

                <FormikControler
                  type="password"
                  control="input"
                  name="confirmPassword"
                  label="Confirm password"
                />

                <FormikControler
                  control="input"
                  type="number"
                  name="phone"
                  label="Phone"
                />

                <FormikControler
                  control="radio"
                  name="gender"
                  label="Gender"
                  options={gender}
                />
                <FormikControler control="date" name="date" label="Birthday" />

                <FormikControler
                  control="checkbox"
                  name="skills"
                  label="Skills"
                  options={checkboxOptions}
                />

              </div>




              <div className="second">
                <h1>Address</h1>
                <FormikControler
                  type="text"
                  control="input"
                  name="address"
                  label="Address"
                />

                
                <FormikControler
                  control="select"
                  name="city"
                  label="City"
                  options={cities}
                />

                <FormikControler 
                control="textarea" 
                label="Tell us how can we help you?"
                 name="textarea" />
            

              </div>
            </div>
            <button
              className="btn-submit"
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
