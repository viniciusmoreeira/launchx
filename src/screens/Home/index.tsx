import React, { useEffect, useState } from 'react';
import { Animated, Text } from 'react-native';

import { Container, TitleRegular, TitleBold } from './styles';

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

        <TitleRegular>LaunchX D-Din Regular</TitleRegular>
        <TitleBold>LaunchX D-Din Bold</TitleBold>
      </Container>
    </Animated.View>
  );
};

export default Home;
