import React, { useEffect, useState } from 'react';
import { Drawer, Stack } from '@mantine/core';
import UserBar from './FrontPageComonents/UserBar';
import TabNavigation from './FrontPageComonents/TabNavigation';

export default function FrontPage(): JSX.Element {
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
      <Stack>
        <UserBar />
        <TabNavigation />
      </Stack>
    </Drawer>
  );
}
