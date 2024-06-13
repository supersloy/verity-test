import {
  ActionIconProps,
  ActionIcon as MantineActionIcon,
  useComputedColorScheme,
} from '@mantine/core';

export function ActionIcon(props: ActionIconProps) {
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  const color = computedColorScheme === 'light' ? 'black' : 'gray';
  return <MantineActionIcon {...props} variant="outline" color={color} />;
}
