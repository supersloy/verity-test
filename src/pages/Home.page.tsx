import { Box, Button, Group } from '@mantine/core';
import { Header } from '@/components/Header';
import { MainCallout } from '@/components/MainCallout';
import { SoloGuardian } from '@/components/Solo/SoloGuardian';
import { generateRandomStacks } from '@/store/Solos/utils';

export function HomePage() {
  return (
    <Box miw="400px">
      <Header />
      <MainCallout />
      <Group justify="space-between" m="xl">
        <SoloGuardian position="Left" />
        <SoloGuardian position="Center" />
        <SoloGuardian position="Right" />
      </Group>
      <Button onClick={generateRandomStacks}>Shuffle</Button>
    </Box>
  );
}
