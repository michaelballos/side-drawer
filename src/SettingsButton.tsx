import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import SettingsIcon from './SettingsIcon';

export default function SettingsButton() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Actions Modal!'
      >
        {/* Modal content */}
      </Modal>
      <Group position='center'>
        <Button
          className="settingsButton"
          compact
          variant='subtle'
          onClick={() => setOpened(true)}>
          <SettingsIcon /> 
        </Button>
      </Group>
    </>
  );
}
