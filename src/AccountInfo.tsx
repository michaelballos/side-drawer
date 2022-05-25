import React from 'react';
import './SideDrawer.scss';
import { Group, Stack, Button } from '@mantine/core';
import SettingsButton from './SettingsButton';
import ProfilePicture from './ProfilePicture';
import Email from './Email';

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