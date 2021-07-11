import 'styled-components/native';

import dark from './themes/dark';

type Theme = typeof dark;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
