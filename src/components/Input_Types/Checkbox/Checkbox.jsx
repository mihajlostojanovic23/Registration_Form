import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../TextError/TextError';

function Checkbox(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-control-checkbox">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return (
            <div className="checkboxes">
              {options.map((option) => {
                return (
                  <div key={option.key}>
                    <input
                      type="checkbox"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value.includes(option.value)}
                    />
                    <label htmlFor={option.value} className="checkbox">
                      {option.value}
                    </label>
                  </div>
                );
              })}{' '}
            </div>
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Checkbox;
