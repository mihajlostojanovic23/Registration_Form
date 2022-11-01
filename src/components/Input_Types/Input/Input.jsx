import { Field, ErrorMessage } from 'formik';
import React from 'react';
import TextError from '../../TextError/TextError';

function Input(props) {
  const { name, label, ...rest } = props;
  return (
    <div className="form-control-input">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
