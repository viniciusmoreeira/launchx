import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import LottieView from 'lottie-react-native';

import { SplashAnimation } from '~/assets/animations';
import { D_DIN_Regular, D_DIN_Bold } from '~/assets/fonts';
import { useTimeout } from '~/hooks';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    D_DIN_Regular,
    D_DIN_Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useTimeout(() => setIsLoading(false), 3500);

  if (isLoading || !fontsLoaded) {
    return (
      <View style={styles.container}>
        <LottieView source={SplashAnimation} autoPlay />
      </View>
    );
  }

  return <AppRoutes />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111115',
  },
});

export default Routes;
