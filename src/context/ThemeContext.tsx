import React, { createContext, useContext } from 'react';

import merge from 'deepmerge';
import { showMessage } from 'react-native-flash-message';
import { ThemeProvider } from 'styled-components/native';

import { ThemeType } from '~/styles/styled';
import themes from '~/styles/themes';

interface ThemeContextData {
  theme: ThemeType;
  toggleTheme: () => void;
}

interface Props {
  initial: ThemeType;
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ManageThemeProvider: React.FC<Props> = ({ children, initial }) => {
  const [theme, setTheme] = React.useState<ThemeType>(initial);

  const toggleThemeCallback = React.useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.name === 'dark') {
        return merge(themes.defaultTheme, themes.light);
      }
      if (currentTheme.name === 'light') {
        return merge(themes.defaultTheme, themes.dark);
      }

      return currentTheme;
    });

    showMessage({
      message: 'Tema alterado!',
      type: 'success',
      titleStyle: {
        textAlign: 'center',
      },
    });
  }, []);

  const memoizedValue = React.useMemo(() => {
    const value: ThemeContextData = {
      theme,
      toggleTheme: toggleThemeCallback,
    };
    return value;
  }, [theme, toggleThemeCallback]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}

export { ManageThemeProvider, useTheme };
