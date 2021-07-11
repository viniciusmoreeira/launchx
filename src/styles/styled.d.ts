import 'styled-components/native';

import dark from './themes/dark';
import defaultTheme from './themes/defaultTheme';

type ThemeType = typeof dark & typeof defaultTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
