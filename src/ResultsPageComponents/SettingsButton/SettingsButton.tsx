import { 
  Group,
  Menu,
  Divider,
  Text,
  Avatar 
} from '@mantine/core';

export default function SettingsButton() {
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
            src={require('../../particleSpace.png')}
          />

          <div>
            <Text weight={500}>Particle Space</Text>
            <Text size="xs" color="dimmed">
              support@particlespace.com
            </Text>
          </div>
        </Group>
      </Menu.Item>

      <Divider />

      <Menu.Label>Settings</Menu.Label>
      <Menu.Item>Account settings</Menu.Item>
      <Menu.Item>Change account</Menu.Item>
      <Menu.Item>Logout</Menu.Item>

      <Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item color="red">
        Delete account
      </Menu.Item>
    </Menu>
  </Group>
  );
}
