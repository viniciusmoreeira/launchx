import React from 'react';

import { Button } from '~/components';
import { useTheme } from '~/context';

import { Container, Title } from './styles';

export default function Home(): JSX.Element {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Title>Home</Title>

      <Button
        minH={50}
        mt={20}
        px={40}
        bg="primary"
        onPress={() => toggleTheme()}
        shadow="md"
        rounded="md"
        fontSize="md"
        fontWeight="bold"
        color="background"
      >
        Switch Color Mode
      </Button>
    </Container>
  );
}
