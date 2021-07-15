import { ImageSourcePropType as RNImageSourcePropType } from 'react-native';

type Undefined<T> = { [P in keyof T]: P extends undefined ? T[P] : never };

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];

type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

export type OptionalKeys<T> = Exclude<
  keyof T,
  NonNullable<keyof SubType<Undefined<T>, never>>
>;

export type ThemeProps<T> = {
  [name: string]: T;
};

type ComponentsProps<T> = Omit<
  Pick<T, OptionalKeys<T>>,
  'children' | 'variant'
>;

export type VariantType<T> = ComponentsProps<T> & {
  variants?: {
    [name: string]: ComponentsProps<T>;
  };
};

export type DefaultProps<Props extends object> = {
  [K in keyof Props]?: Props[K];
};

export type FontSizingPropsType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export type BorderRadiusSizingPropsType =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'circle';

export type SpacingSizingPropsType =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '-xs'
  | '-sm'
  | '-md'
  | '-lg'
  | '-xl'
  | '-2xl'
  | '-3xl';

export type ShadowSizingPropsType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const borderProps = [
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderLeftWidth',
  'borderBottomWidth',
  'borderStartWidth',
  'borderEndWidth',
  'borderStyle',
] as const;
export interface BorderPropsType {
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
  borderStartWidth?: number;
  borderEndWidth?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
}

export const spacingProps = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'ms',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'ps',
] as const;
export interface SpacingPropsType {
  m?: SpacingSizingPropsType | number;
  mt?: SpacingSizingPropsType | number;
  mr?: SpacingSizingPropsType | number;
  mb?: SpacingSizingPropsType | number;
  ml?: SpacingSizingPropsType | number;
  mx?: SpacingSizingPropsType | number;
  my?: SpacingSizingPropsType | number;
  ms?: SpacingSizingPropsType | number;
  p?: SpacingSizingPropsType | number;
  pt?: SpacingSizingPropsType | number;
  pr?: SpacingSizingPropsType | number;
  pb?: SpacingSizingPropsType | number;
  pl?: SpacingSizingPropsType | number;
  px?: SpacingSizingPropsType | number;
  py?: SpacingSizingPropsType | number;
  ps?: SpacingSizingPropsType | number;
}

export const roundedProps = [
  'rounded',
  'roundedTopLeft',
  'roundedTopRight',
  'roundedBottomLeft',
  'roundedBottomRight',
  'roundedTop',
  'roundedLeft',
  'roundedRight',
  'roundedBottom',
] as const;
export interface RoundedPropsType {
  rounded?: BorderRadiusSizingPropsType | number;
  roundedTopLeft?: BorderRadiusSizingPropsType | number;
  roundedTopRight?: BorderRadiusSizingPropsType | number;
  roundedBottomLeft?: BorderRadiusSizingPropsType | number;
  roundedBottomRight?: BorderRadiusSizingPropsType | number;
  roundedTop?: BorderRadiusSizingPropsType | number;
  roundedLeft?: BorderRadiusSizingPropsType | number;
  roundedRight?: BorderRadiusSizingPropsType | number;
  roundedBottom?: BorderRadiusSizingPropsType | number;
}

export const shadowProps = ['shadow', 'shadowColor'] as const;
export interface ShadowPropsType {
  shadow?: ShadowSizingPropsType | number;
  shadowColor?: string;
}

export const dimensionProps = [
  'minH',
  'minW',
  'maxH',
  'maxW',
  'h',
  'w',
] as const;
export interface DimensionPropsType {
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  h?: number | string;
  w?: number | string;
}

export const flexProps = [
  'row',
  'flex',
  'flexDir',
  'flexWrap',
  'justifyContent',
  'alignSelf',
  'alignItems',
] as const;
export interface FlexPropsType {
  row?: boolean;
  flex?: number;
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export const positionProps = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
] as const;
export interface PositionPropsType {
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const backgroundProps = ['bg', 'bgImg', 'bgMode'] as const;
export interface BackgroundPropsType {
  bg?: string;
  bgImg?: RNImageSourcePropType;
  bgMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
}

export const textProps = [
  'color',
  'fontSize',
  'textDecorLine',
  'textDecorStyle',
  'fontStyle',
  'textDecorColor',
  'fontWeight',
  'fontFamily',
  'lineHeight',
  'textAlign',
  'textTransform',
  'letterSpacing',
  'textAlignVertical',
] as const;
export interface TextPropsType {
  color?: string;
  fontSize?: FontSizingPropsType | number;
  textDecorLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  fontStyle?: 'normal' | 'italic';
  textDecorColor?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '300'
    | '400'
    | '500'
    | '700'
    | '900';

  fontFamily?: string;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  textDecorationColor?: string;
  textShadowColor?: string;
  textShadowOffset?: { width: number; height: number };
  textShadowRadius?: number;
}

export const opacityProps = ['opacity'] as const;
export interface OpacityPropsType {
  opacity?: number;
}

export const overflowProps = ['overflow'] as const;
export interface OverflowPropsType {
  overflow?: 'hidden' | 'visible' | 'scroll';
}

export const zIndexProps = ['zIndex'] as const;
export interface ZIndexPropsType {
  zIndex?: number;
}

export const loadingProps = ['loading', 'loaderSize', 'loaderColor'] as const;
export interface LoadingPropsType {
  loading?: boolean;
  loaderSize?: number | string;
  loaderColor?: string;
}

export const accessoriesProps = ['accessoryLeft', 'accessoryRight'] as const;
export interface AccessoriesPropsType {
  accessoryLeft?: React.ReactNode;
  accessoryRight?: React.ReactNode;
}

export const inputProps = ['focusBorderColor'] as const;
export interface InputPropsType {
  focusBorderColor?: string;
}

export const disabledProps = ['disabled'] as const;
export interface DisabledPropsType {
  disabled?: null | boolean;
}

export const buttonProps = [
  'underlayColor',
  'block',
  'borderless',
  'rippleColor',
  'ripple',
] as const;
export interface ButtonPropsType {
  underlayColor?: string;
  block?: boolean;
  borderless?: boolean;
  rippleColor?: string;
  ripple?: boolean;
}

export const overlayProps = ['overlayColor', 'overlayOpacity'] as const;
export interface OverlayPropsType {
  overlayColor?: string;
  overlayOpacity?: number;
}

export const variantProps = ['variant'] as const;
export interface VariantPropsType {
  variant?: string;
}
