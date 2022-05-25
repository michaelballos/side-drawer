import React, { useEffect, useState} from 'react';
import { Drawer, Group, Stack } from '@mantine/core';
import UserBar from './UserBar';
import TabNavigation from './TabNavigation';

export default function Front(): JSX.Element {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  }, []);

  return (
    <Drawer
      title='Particle Space'
      position='left'
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <Stack>
        <UserBar />
          <TabNavigation />
      </Stack>
    </Drawer>    
  )
}