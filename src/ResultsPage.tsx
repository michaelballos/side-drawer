import React, { useEffect, useState } from 'react';
import AccountInfo from './ResultsPageComponents/AccountInfo/AccountInfo';
import Accordian from './ResultsPageComponents/Accordian/Accordian';
import './Styles/SideDrawer.scss';
import { Drawer, Stack } from '@mantine/core';
import BackArrowButton from './ResultsPageComponents/BackArrowButton/BackArrowButton';

export default function ResultsPage() {
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
