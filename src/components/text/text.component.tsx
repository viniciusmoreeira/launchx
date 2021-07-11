import React from 'react';
import { Text as RNText } from 'react-native';

import { useTheme } from '~/context';

import { getStyle } from './text.style';
import { TextProps } from './text.type';

const defaultProps: TextProps = {
  color: 'secondary',
  textAlign: 'auto',
  textTransform: 'none',
  fontSize: 'md',
  overflow: 'hidden',
  textAlignVertical: 'center',
};

const Text: React.FC<TextProps> = (incomingProps) => {
  const { theme } = useTheme();
  const { children, ...rest } = incomingProps;

  const computedStyle = getStyle(theme, incomingProps);

  return (
    <RNText style={computedStyle.text} {...rest}>
      {children}
    </RNText>
  );
};

Text.defaultProps = defaultProps;

export { Text };
