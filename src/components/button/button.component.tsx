import React from 'react';
import {
  View as RNView,
  Animated as RNAnimated,
  Pressable as RNButton,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import { useTheme } from '~/context';

import { getStyle } from './button.style';
import { ButtonProps } from './button.type';

const defaultProps: ButtonProps = {
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
};

function Button(incomingProps: ButtonProps): JSX.Element {
  const { loading, disabled, children, onPress, ...rest } = incomingProps;
  const { theme } = useTheme();

  const computedStyle = getStyle(theme, incomingProps);

  return (
    <RNButton
      {...rest}
      onPress={disabled || loading ? undefined : onPress}
      style={({ pressed }) => [
        computedStyle.button,
        pressed && !disabled && !loading,
      ]}
    >
      {loading ? (
        <RNView style={computedStyle.container}>
          <RNView style={computedStyle.loadingContainer}>
            <RNActivityIndicator />
          </RNView>
        </RNView>
      ) : (
        <RNAnimated.View style={computedStyle.container}>
          {children}
        </RNAnimated.View>
      )}
    </RNButton>
  );
}

Button.defaultProps = defaultProps;

export { Button };
