import React from 'react';
import { Tabs } from '@mantine/core';
import SearchProperty from './SearchProperty';

export default function TabNavigation() {
  return (
    <Tabs variant='outline'>
      <Tabs.Tab label='Search Property'>
        <SearchProperty />
      </Tabs.Tab>
      <Tabs.Tab label='Detect Emails'>
        Pink tab content
      </Tabs.Tab>
    </Tabs>
  );
}
