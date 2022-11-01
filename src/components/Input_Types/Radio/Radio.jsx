import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../TextError/TextError';

function Radio(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control-radio">
      <label htmlFor={name}>{label}:</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return  options.map((option) => {
            return <div key={option.key} className='options'> 
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            
            </div>
          });
          
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Radio;
