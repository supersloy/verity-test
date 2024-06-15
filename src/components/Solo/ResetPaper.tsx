import { Button, Paper, Stack, Title, useComputedColorScheme } from '@mantine/core';
import { startSolos } from '@/store/Solos/useSolosStore';
import { setRandomLayout } from '@/store/useMainCalloutStore';

export function ResetPaper() {
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  const color = computedColorScheme === 'light' ? 'black' : 'gray';
  const restart = () => {
    startSolos();
    setRandomLayout();
  };

  return (
    <Paper withBorder w="300px">
      <Stack style={{ margin: '0 1rem 1rem' }}>
        <Title style={{ textAlign: 'center' }}>Actions</Title>
        <Button c={color} onClick={restart}>
          Reset
        </Button>
        <Button c={color} onClick={startSolos}>
          Reset same main
        </Button>
      </Stack>
    </Paper>
  );
}
