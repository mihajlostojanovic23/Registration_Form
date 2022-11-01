import React from 'react';
import { Input, Radio, Checkbox, DatePicker, Select, TextArea } from './index.js';

function FormikControler(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'radio':
      return <Radio {...rest} />;

    case 'checkbox':
      return <Checkbox {...rest} />;

    case 'date':
      return <DatePicker {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    default:
      return null;
  }
}

export default FormikControler;
