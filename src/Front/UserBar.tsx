import React from 'react';
import { Image, Text, Group } from '@mantine/core';
import SettingsButton from './SettingsButton';

export default function UserBar(): JSX.Element {
  return (
    <Group
      style={{
        paddingLeft: '15px',
      }}
      position='apart'
    >
      <Group>
        <Image
          width={40}
          height={40}
          radius={20}
        >
          <img 
            src='../../public/particle-space.png' 
            alt='Particle Space' 
          />
        </Image>
        <Text>
          User
        </Text>
      </Group>
      <SettingsButton />
    </Group>
  ); 
}