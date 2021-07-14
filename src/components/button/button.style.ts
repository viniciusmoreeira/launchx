/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { StyleSheet } from 'react-native';

import { ThemeType } from '~/styles/themes/type';
import {
  createBorderRadiusStyles,
  createBorderWidthStyles,
  createPositionStyle,
  createShadowStyles,
  createSpacingStyles,
  getThemeColor,
} from '~/styles/themes/utilities';

import { ButtonProps } from './button.type';

export const getStyle = (theme: ThemeType, props: ButtonProps) => {
  const computedStyle: any = {};

  computedStyle.button = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: props.alignSelf,
    opacity: props.opacity,
    flex: props.flex,
    zIndex: props.zIndex,
    width: props.w,
    height: props.h,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createPositionStyle(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeColor(theme.colors, props.bg),
  };

  computedStyle.loadingContainer = {
    alignItems: 'center',
    justifyContent: 'center',
  };

  computedStyle.container = {
    flexDirection: props.flexDir,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    position: 'relative',
  };

  if (props.borderless === false) {
    computedStyle.button = {
      ...computedStyle.button,
      overflow: 'hidden',
    };
  }

  if (props.block) {
    computedStyle.container = {
      ...computedStyle.container,
      width: '100%',
      alignSelf: 'stretch',
    };

    computedStyle.button = {
      ...computedStyle.button,
      alignSelf: 'stretch',
    };
  }

  if (props.disabled) {
    computedStyle.button = {
      ...computedStyle.button,
      opacity: 0.5,
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
