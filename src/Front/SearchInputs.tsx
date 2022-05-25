import React from 'react';
import FloatingLabelInput from './FloatingLabelInput';

export default function SearchInputs() {
  return (
    <>
      <FloatingLabelInput
        label='Address'
        placeholder='Enter an address'
        required
      />
      <FloatingLabelInput label='City' placeholder='Enter a city' required />
      <FloatingLabelInput label='State' placeholder='Enter a state' required />
      <FloatingLabelInput
        label='Zipcode'
        placeholder='Enter a zipcode'
        required
      />
    </>
  );
}
