import React, { 
   useState 
} from 'react';
import { 
  TextInput, 
  createStyles 
} from '@mantine/core';

const useStyles = createStyles((theme, { floating }: { floating: boolean }) => ({
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
    color: floating
      ? theme.colorScheme === 'dark'
        ? theme.white
        : theme.black
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
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
}));

export default function FloatingLabel({ 
  label, 
  placeholder, 
  value,
  setValue,
  required, 
  }: {
      label: string,
      placeholder: string,
      value: string,
      setValue: (value: string) => void,
      required: boolean | undefined,
    }): JSX.Element {
  const [focused, setFocused] = useState(false);
  const { classes } = useStyles({ floating: value.trim().length !== 0 || focused });
  return (
    <>
      <TextInput
        label={label}
        placeholder={placeholder}
        {...{required}} 
        classNames={classes}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        mt="md"
        autoComplete="nope"
      />
    </>
  );
}
