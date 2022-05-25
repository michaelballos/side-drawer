import React, { useState } from 'react';
import { Button, Stack, Group, createStyles, TextInput } from '@mantine/core';
import LoadingButton from './LoadingButton';

const useStyles = createStyles((theme, {
  focusedAddress, 
  focusedCity,
  focusedState,
  focusedZipcode,
}: { 
  focusedAddress: boolean 
  focusedCity: boolean 
  focusedState: boolean 
  focusedZipcode: boolean 
}) => ({
  root: {
    position: 'relative',
    paddingLeft: '10px',
    paddingRight: '10px',
  },

  label: {
    position: 'absolute',
    zIndex: 2,
    top: 7,
    left: theme.spacing.xl,
    pointerEvents: 'none',
    color: focusedAddress || focusedCity || focusedState || focusedZipcode
      ? theme.colorScheme === 'dark'
        ? theme.white
        : theme.black
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
    transform: focusedAddress || focusedCity || focusedState || focusedZipcode ? `translate(-${theme.spacing.sm}px, -28px)` : 'none',
    fontSize: focusedAddress || focusedCity || focusedState || focusedZipcode ? theme.fontSizes.xs : theme.fontSizes.sm,
    fontWeight: focusedAddress || focusedCity || focusedState || focusedZipcode ? 500 : 400,
  },

  required: {
    transition: 'opacity 150ms ease',
    opacity: focusedAddress || focusedCity || focusedState || focusedZipcode ? 1 : 0,
  },

  input: {
    '&::placeholder': {
      transition: 'color 150ms ease',
      color: !focusedAddress || focusedCity || focusedState || focusedZipcode ? 'transparent' : undefined,
    },
  },
}));

/**
 * styles and states need to b fixed 
 */
export default function SearchForm(): JSX.Element {
  const [focusedAddress, setFocusedAddress] = useState(false);
  const [focusedCity, setFocusedCity] = useState(false);
  const [focusedState, setFocusedState] = useState(false);
  const [focusedZipcode, setFocusedZipcode] = useState(false);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [loadingState, setLoadingState] = useState(false);
  const { classes } = useStyles({
    focusedAddress: focusedAddress,
    focusedCity: focusedCity,
    focusedState: focusedState,
    focusedZipcode: focusedZipcode,  
    });
  const onClick = async ()  => {
    await setLoadingState(true);
    await setTimeout(() => {
    setLoadingState(false);
    }, 2000);
  }

  return (
    <Stack>
      <TextInput
        label='Address'
        placeholder='Enter your address'
        required 
        classNames={classes}
        value={address}
        onChange={(event) => setAddress(event.currentTarget.value)}
        onFocus={() => setFocusedAddress(true)}
        onBlur={() => setFocusedAddress(false)}
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label='City'
        placeholder='Enter your City'
        required 
        classNames={classes}
        value={city}
        onChange={(event) => setCity(event.currentTarget.value)}
        onFocus={() => setFocusedCity(true)}
        onBlur={() => setFocusedCity(false)}
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label='State'
        placeholder='Enter your state'
        required 
        classNames={classes}
        value={state}
        onChange={(event) => setState(event.currentTarget.value)}
        onFocus={() => setFocusedState(true)}
        onBlur={() => setFocusedState(false)}
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label='Zipcode'
        placeholder='Enter your zipcode'
        required 
        classNames={classes}
        value={zipcode}
        onChange={(event) => setZipcode(event.currentTarget.value)}
        onFocus={() => setFocusedZipcode(true)}
        onBlur={() => setFocusedZipcode(false)}
        mt="md"
        autoComplete="nope"
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
        onClick={onClick}
        loading={loadingState}
        size='md'
        label="Search"
      />
      </Group>
    </Stack>
  );
}
