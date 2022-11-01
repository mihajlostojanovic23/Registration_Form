import { Field, ErrorMessage } from 'formik';
import React from 'react';
import TextError from '../../TextError/TextError';

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option._id} value={option.city}>
            {option.city}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
