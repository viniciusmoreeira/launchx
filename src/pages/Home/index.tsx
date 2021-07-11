import React from 'react';

import { Button, Text } from '~/components';
import { useTheme } from '~/context';

import { Container, Title } from './styles';

export default function Home(): JSX.Element {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Title>Home</Title>

      <Button
        minH={50}
        rounded="circle"
        mt={20}
        px={40}
        bg="primary"
        onPress={() => toggleTheme()}
        shadow="md"
      >
        <Text fontSize="lg" fontWeight="bold" color="background">
          Switch Color Mode
        </Text>
      </Button>
    </Container>
  );
}
