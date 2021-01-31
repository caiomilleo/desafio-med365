import React from 'react';
import { Input } from './styles';


export function InputComponent({ placeholder, value, setValue }) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></Input>
  );
}
