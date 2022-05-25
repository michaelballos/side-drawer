import React, { useState, useCallback } from 'react';
import { Button, Box, Group, createStyles, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import LoadingButton from './LoadingButton';

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: {
      position: 'relative',
      padding: '5px 0px',
    },

    box: {
      height: '80px',
      padding: '0px 10px',
    },

    label: {
      position: 'absolute',
      zIndex: 2,
      top: 12,
      left: theme.spacing.sm,
      pointerEvents: 'none',
      color: floating
        ? theme.colorScheme === 'dark'
          ? theme.white
          : theme.black
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition:
        'transform 150ms ease, color 150ms ease, font-size 150ms ease',
      transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : 'none',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
    },

    required: {
      transition: 'opacity 150ms ease',
      opacity: floating ? 1 : 0,
    },

    input: {
      '&::placeholder': {
        transition: 'color 150ms ease',
        color: !floating ? 'transparent' : undefined,
      },
    },
  })
);

/**
 * styles and states need to b fixed
 */
export default function SearchForm(): JSX.Element {
  const [focused, setFocused] = useState(false);
  const [value] = useState('');
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });
  const form = useForm({
    initialValues: {
      address: '',
      city: '',
      state: '',
      zipcode: '',
    },
  });
   const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = useCallback(async (values: any) => {
      await setLoadingState(true);
      await form.reset();
      await setTimeout(() => {
        setLoadingState(false);
        console.log('values:', values);
      }, 2000);
  }, [form]);

  const setFocus = useCallback(() => {
    setFocused(true);
  }, []);

  return (
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Box className={classes.box}>
      <TextInput
        label="Address"
        placeholder="Enter the address"
        required
        classNames={classes}
        {...form.getInputProps('address')}
        onFocus={setFocus}
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label="City"
        placeholder="Enter the City"
        required
        classNames={classes}
        {...form.getInputProps('city')}
        onFocus={setFocus}
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label="State"
        placeholder="Enter the state"
        required
        classNames={classes}
        {...form.getInputProps('state')}
        onFocus={setFocus}
        mt="md"
        autoComplete="nope"
      />
      <TextInput
        label="Zipcode"
        placeholder="Enter the zipcode"
        required
        classNames={classes}
        {...form.getInputProps('zipcode')}
        onFocus={setFocus}
        mt="md"
        autoComplete="nope"
      />
      <Group position="center">
        <Button variant="subtle" type="submit" size="sm">
          &#8592; Go Back
        </Button>
      <LoadingButton
        label="Search"
        loading={loadingState} 
        size="sm"
      />
      </Group>
      </Box>
      </form>
  );
}
