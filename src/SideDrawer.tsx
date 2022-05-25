import React, { useEffect, useState } from 'react';
import AccountInfo from './AccountInfo';
import Accordian from './Accordian';
import './SideDrawer.scss';
import * as ReactDOM from 'react-dom';
import { Drawer, Stack } from '@mantine/core';
import BackArrowButton from './BackArrowButton';

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
        title={<BackArrowButton />}
      >
        <Stack>        
          <AccountInfo />
          <Accordian />
        </Stack>
      </Drawer>
    );
}
