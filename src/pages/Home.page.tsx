import { Box, Button, Group } from '@mantine/core';
import { Header } from '@/components/Header';
import { MainCallout } from '@/components/MainCallout';
import { GuardianSolo } from '@/components/Solo/GuardianSolo/GuardianSolo';
import { setRandomStacks, useSolosStore } from '@/store/Solos/useSolosStore';

export function HomePage() {
  return (
    <Box miw="400px">
      <Header />
      <MainCallout />
      <Group justify="space-between" m="xl">
        <GuardianSolo position="Left" />
        <GuardianSolo position="Center" />
        <GuardianSolo position="Right" />
      </Group>
      <Button onClick={setRandomStacks}>Shuffle</Button>
      <Button onClick={() => console.log(useSolosStore.getState())} />
    </Box>
  );
}
