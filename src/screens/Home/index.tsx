import React, { useEffect, useState } from 'react';
import { Animated, Text } from 'react-native';

import { Container } from './styles';

const Home: React.FC = () => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity,
      }}
    >
      <Container>
        <Text style={{ color: 'white', fontSize: 20 }}>LaunchX</Text>
      </Container>
    </Animated.View>
  );
};

export default Home;
