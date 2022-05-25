import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import AccountInfo from './AccountInfo';
import Accordian from './Accordian';
import './SideDrawer.scss';
import * as ReactDOM from 'react-dom';
import { Drawer, Stack, Group } from '@mantine/core';
import SettingsButton from './SettingsButton';

export default function SideDrawer() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  }, []);

  return (
      <Drawer 
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        title={<SettingsButton />}
      >
        <Stack>        
          <AccountInfo />
          <Accordian />
        </Stack>
      </Drawer>
    );
}
