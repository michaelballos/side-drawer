import React from 'react';
import { TextInput, Stack, Text, Group } from '@mantine/core';
import { PasswordInput } from '@mantine/core';

export default function LoginForm() {
  return (
    <Stack>
      <Text
        size="md"
        weight={200}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Hi! Login with your Particle Space Account.
      </Text>
      <TextInput label="Email" placeholder="Enter your email" id="email" />
      <PasswordInput />
    </Stack>
  );
}
