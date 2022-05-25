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
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
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
