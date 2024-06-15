import { Divider, Group, Paper, Text } from '@mantine/core';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';

export function Header() {
  return (
    <Paper radius="0">
      <Group justify="space-between" m="0.5rem 2rem">
        <Text
          span
          size="1.5rem"
          style={{ lineHeight: '2rem' }}
          fw={900}
          variant="gradient"
          gradient={{ from: 'red', to: 'green', deg: 114 }}
        >
          Verity playground
        </Text>
        <ThemeToggle />
      </Group>
      <Divider />
    </Paper>
  );
}
