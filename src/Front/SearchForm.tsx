import React, { useState } from 'react';
import FloatingLabelInput from './FloatingLabelInput';
import { Button, Stack, Group } from '@mantine/core';
import LoadingButton from './LoadingButton';

export default function SearchForm(): JSX.Element {

  return (
    <Stack>
      <FloatingLabelInput
        label="Address"
        placeholder="Enter an address"
        required
      />
      <FloatingLabelInput 
        label="City" 
        placeholder="Enter a city" 
        required 
      />
      <FloatingLabelInput label="State" placeholder="Enter a state" required />
      <FloatingLabelInput
        label="Zipcode"
        placeholder="Enter a zipcode"
        required
      />
      <Group position='center'>
        <Button 
          variant="subtle" 
          type="submit"
          size='sm'
        >
          &#8592; Go Back
        </Button>
      <LoadingButton 
        loading={false}
        size='md'
        label="Search"
      />
      </Group>
    </Stack>
  );
}
