import React, { useEffect, useState } from 'react';
import { Drawer, Text, Stack } from '@mantine/core';
import { ForgotPasswordInput } from './LoginPageComponents/ForgotPasswordInput';
import { useForm } from '@mantine/form';
import LoginForm from './LoginPageComponents/LoginForm';

export default function LoginPage() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  }, []);

  return (
    <Drawer
      title={
        <span
          style={{
            paddingLeft: '10px',
          }}
        >
          Particle Space
        </span>
      }
      position="right"
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <Stack
          style={{
            padding: '10px',
          }}
        >
          <LoginForm />
        </Stack>
      </form>
    </Drawer>
  );
}
