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
import { D_DIN_Regular, D_DIN_Bold } from '~/assets/fonts';

import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
    D_DIN_Regular,
    D_DIN_Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
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
