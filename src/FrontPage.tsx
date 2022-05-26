import React, { useEffect, useState } from 'react';
import { Drawer, Text, Group, Stack, Avatar } from '@mantine/core';
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
        <Group
          style={{
            width: '270px',
            paddingTop: '10px',
            paddingLeft: '55px',
          }}
          position="center"
        >
        <Avatar
         radius="xl" 
         size="sm" 
         src={require("./particleSpace.png")}
        />
        </Group>
        }
      position="left"
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <Stack>
        <Text 
          align='center'
        >
          Particle Space
        </Text>
        <TabNavigation />
      </Stack>
    </Drawer>
  );
}
