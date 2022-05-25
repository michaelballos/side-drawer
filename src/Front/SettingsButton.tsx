import { useState } from 'react';
import { 
  Button, 
  Group,
  Menu,
  Divider,
  Text,
  Avatar 
} from '@mantine/core';
import SettingsIcon from '../SettingsIcon';

export default function SettingsButton() {
  const [opened, setOpened] = useState(false);
  return (
    <Group 
      style={{
        paddingRight: '10px',
      }}
      position="center"
    >
    <Menu size={300} placement="end" transition="pop">
      <Menu.Item>
        <Group>
          <Avatar
            radius="xl"
            src={require('../particleSpace.png')}
          />

          <div>
            <Text weight={500}>Grace</Text>
            <Text size="xs" color="dimmed">
              grace@particlespace.com
            </Text>
          </div>
        </Group>
      </Menu.Item>

      <Divider />

      <Menu.Item>Liked posts</Menu.Item>
      <Menu.Item>Saved posts</Menu.Item>
      <Menu.Item>
        Your comments
      </Menu.Item>

      <Menu.Label>Settings</Menu.Label>
      <Menu.Item>Account settings</Menu.Item>
      <Menu.Item>Change account</Menu.Item>
      <Menu.Item>Logout</Menu.Item>

      <Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item>Pause subscription</Menu.Item>
      <Menu.Item color="red">
        Delete account
      </Menu.Item>
    </Menu>
  </Group>
  );
}
