import React from 'react';
import '../../Styles/SideDrawer.scss';
import { Stack, Button } from '@mantine/core';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Email from '../Email/Email';

export default function AccountInfo() {
  return (
    <Stack align='center'>
        <ProfilePicture />
        <Email />
        <Button
          color='orange'
        >
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
            Open In CRM
          </a>
        </Button>
    </Stack>
  );
}