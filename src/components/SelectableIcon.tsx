import {
  ActionIconProps,
  ActionIcon as MantineActionIcon,
  PolymorphicComponentProps,
  useComputedColorScheme,
} from '@mantine/core';

type SelectableIconProps = PolymorphicComponentProps<'button', ActionIconProps> & {
  selected?: boolean;
};

export function SelectableIcon(props: SelectableIconProps) {
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  let color = computedColorScheme === 'light' ? 'black' : 'gray';
  let { disabled } = props;
  if (props.selected) {
    color = 'grape';
    disabled = false;
  }

  return <MantineActionIcon {...props} disabled={disabled} variant="outline" color={color} />;
}
