import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import merge from 'deepmerge';
import * as Updates from 'expo-updates';
import FlashMessage from 'react-native-flash-message';

import { ManageThemeProvider as ThemeProvider } from '~/context/ThemeContext';

import themes from './styles/themes';

import Routes from './routes';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const activeTheme = themes[deviceTheme || 'dark'];
  const combinedTheme = merge(themes.defaultTheme, activeTheme);

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
      <ThemeProvider initial={combinedTheme}>
        <StatusBar hidden />
        <FlashMessage position="top" />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
