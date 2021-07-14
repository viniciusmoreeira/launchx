import 'styled-components/native';

import { ThemeType } from './themes/type';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
