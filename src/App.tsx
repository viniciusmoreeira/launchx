import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import * as Updates from 'expo-updates';
import FlashMessage from 'react-native-flash-message';
import { ThemeProvider } from 'styled-components';

import themes from './styles/themes';

import Routes from './routes';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme || 'dark'];

  useEffect(() => {
    async function updateApp() {
      if (!__DEV__) {
        const { isAvailable } = await Updates.checkForUpdateAsync();

        if (isAvailable) {
          await Updates.fetchUpdateAsync();

          await Updates.reloadAsync();
        }
      }
    }

    updateApp();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar hidden />
        <Routes />
        <FlashMessage position="top" />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
