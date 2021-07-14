import React from 'react';
import { View, Animated, Pressable, ActivityIndicator } from 'react-native';

import { textProps } from '~/@types/types';
import { useTheme } from '~/context';
import { getThemeColor, getThemeProperty } from '~/styles/themes/utilities';
import { getSpecificProps } from '~/utils';
import { useDefaultProps } from '~/utils/useDefaultProps';

import { Text } from '../text/text.component';
import { getStyle } from './button.style';
import { ButtonProps } from './button.type';

function Button(incomingProps: ButtonProps): JSX.Element {
  const props = useDefaultProps('Button', incomingProps, {
    bg: '#fff',
    p: 'lg',
    color: 'white',
    loading: false,
    disabled: false,
    loaderSize: '2xl',
    loaderColor: 'white',
    block: false,
    fontSize: 'lg',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    onPress: () => console.log('Button component pressed'),
    flexDir: 'row',
  });

  const {
    loading,
    loaderSize,
    loaderColor,
    disabled,
    children,
    onPress,
    accessoryLeft,
    accessoryRight,
    ...rest
  } = props;

  const { theme } = useTheme();

  const computedStyle = getStyle(theme, props);

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return <Text {...getSpecificProps(props, ...textProps)}>{children}</Text>;
    }

    return children;
  };

  return (
    <Pressable
      {...rest}
      onPress={disabled || loading ? undefined : onPress}
      style={({ pressed }) => [
        computedStyle.button,
        pressed && !disabled && !loading,
      ]}
    >
      {loading ? (
        <View style={computedStyle.container}>
          <View style={computedStyle.loadingContainer}>
            <ActivityIndicator
              size={getThemeProperty(theme.fontSize, loaderSize)}
              color={getThemeColor(theme.colors, loaderColor)}
            />
          </View>
        </View>
      ) : (
        <Animated.View style={computedStyle.container}>
          {accessoryLeft}
          {renderChildren()}
          {accessoryRight}
        </Animated.View>
      )}
    </Pressable>
  );
}

export { Button };
