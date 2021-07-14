import { ThemeProps, VariantType } from '~/@types/types';
import { ButtonProps, TextProps } from '~/components';

export interface ThemeType {
  name?: string;

  components?: {
    Button?: VariantType<ButtonProps>;
    Text?: VariantType<TextProps>;
  };

  fontFamily: {
    normal?: string;
    bold?: string;
    100?: string;
    300?: string;
    400?: string;
    500?: string;
    700?: string;
    900?: string;
  };

  colors: ThemeProps<string>;
  fontSize: ThemeProps<number>;
  borderRadius?: { none: number; circle: number } & ThemeProps<number>;

  spacing?: { none: number } & ThemeProps<number>;
  shadowColor?: string;
  shadow?: ThemeProps<{
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  }>;
}
