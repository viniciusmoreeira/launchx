import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

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

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);

  if (loading || !fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#111115',
        }}
      >
        <LottieView source={SplashAnimation} autoPlay />
      </View>
    );
  }

  return <AppRoutes />;
};

export default Routes;
