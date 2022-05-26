import React from 'react';
import { Tabs } from '@mantine/core';
import SearchPropertyTab from './SearchPropertyTab';

export default function TabNavigation(): JSX.Element {
  return (
    <Tabs variant='outline'>
      <Tabs.Tab label='Search Property'>
        <SearchPropertyTab />
      </Tabs.Tab>
    </Tabs>
  );
}
