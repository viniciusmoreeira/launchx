import React, { useState } from 'react';

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

import { SplashAnimation } from '~/assets/animations';
import { useTimeout } from '~/hooks';

import AppRoutes from './app.routes';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Routes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useTimeout(() => setIsLoading(false), 3500);

  if (isLoading || !fontsLoaded) {
    return (
      <Container>
        <LottieView source={SplashAnimation} autoPlay />
      </Container>
    );
  }

  return <AppRoutes />;
};

export default Routes;
