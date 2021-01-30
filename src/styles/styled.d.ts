import 'styled-components';

import light from './themes/light';

type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
