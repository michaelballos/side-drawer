import React from 'react';
import { Avatar, Text, Group } from '@mantine/core';
import SettingsButton from './SettingsButton';

export default function UserBar(): JSX.Element {
  return (
    <Group
      style={{
        paddingLeft: '15px',
      }}
      position="apart"
    >
      <Group>
        <Avatar radius="xl" size="md" src={require("../particleSpace.png")} />
        <Text>Grace</Text>
      </Group>
      <SettingsButton />
    </Group>
  );
}
