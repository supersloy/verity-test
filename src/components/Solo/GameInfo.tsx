import { Paper, Stack, Title, Text, Space } from '@mantine/core';
import { useSolosStore } from '@/store/Solos/useSolosStore';

export function GameInfo() {
  const info = useSolosStore((state) => state.gameInfo);
  let solvingTime = 0;
  if (info.endTime && info.startTime) {
    solvingTime = (info.endTime.getTime() - info.startTime.getTime()) / 1000;
  }
  return (
    <Paper withBorder w="300px">
      <Stack style={{ margin: '0 1rem' }} gap="0">
        <Title style={{ textAlign: 'center' }}>Info</Title>
        <Space h="xs" />
        <Text style={{ textAlign: 'center' }}>Shape selections: {info.shapeSelections}</Text>
        <Text style={{ textAlign: 'center' }}>Guardian selections: {info.guardianSelections}</Text>
        <Text style={{ textAlign: 'center' }}>
          State: {info.isCorrect ? 'solved' : 'not solved'}
        </Text>
        {info.isCorrect && (
          <Text style={{ textAlign: 'center' }}>Solving time: {solvingTime}s</Text>
        )}
      </Stack>
    </Paper>
  );
}
