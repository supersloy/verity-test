import { Box, Group } from '@mantine/core';
import { Header } from '@/components/Header';
import { MainCallout } from '@/components/MainCallout';
import { GuardianSolo } from '@/components/Solo/GuardianSolo/GuardianSolo';
import { ResetPaper } from '@/components/Solo/ResetPaper';
import { GameInfo } from '@/components/Solo/GameInfo';

export function HomePage() {
  return (
    <Box miw="500px">
      <Header />
      <Group align="stretch" justify="center" m="xl">
        <ResetPaper />
        <MainCallout />
        <GameInfo />
      </Group>
      <Group justify="center" m="xl">
        <GuardianSolo position="Left" />
        <GuardianSolo position="Center" />
        <GuardianSolo position="Right" />
      </Group>
    </Box>
  );
}
