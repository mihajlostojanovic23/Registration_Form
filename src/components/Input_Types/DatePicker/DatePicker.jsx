import { Field, ErrorMessage } from 'formik';
import React from 'react';
import DataView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextError from '../../TextError/TextError';

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control-date">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
      
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DataView
              id={name}
              {...field}
              {...rest}
              placeholderText='01/01/2022'
              selected={value}
              autoComplete='off'
              onChange={(val) => {
                setFieldValue(name, val);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
