import { Box, Group } from '@mantine/core';
import { Header } from '@/components/Header';
import { MainCallout } from '@/components/MainCallout';
import { SoloGuardian } from '@/components/SoloGuardian';

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
    </Box>
  );
}
