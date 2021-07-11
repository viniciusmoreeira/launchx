import 'styled-components/native';

import light from './themes/light';

type Theme = typeof light;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
