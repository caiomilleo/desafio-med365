import React from 'react';

export function InputComponent({ placeholder, value, setValue }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
}
