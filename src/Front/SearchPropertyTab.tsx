import React from 'react';
import FloatingLabelInput from './FloatingLabelInput';
import SearchForm from './SearchForm';
import {
  Button,
  Stack,
  Group
} from '@mantine/core'

export default function SearchPropertyTab(): JSX.Element {
  return (
    <Stack>
      <SearchForm />      
    </Stack>
  );
}
