import React from 'react';
import { Text as RNText } from 'react-native';

import { useTheme } from '~/context';
import { useDefaultProps } from '~/utils/useDefaultProps';

import { getStyle } from './text.style';
import { TextProps } from './text.type';

const Text: React.FC<TextProps> = (incomingProps) => {
  const props = useDefaultProps('Button', incomingProps, {
    color: 'secondary',
    textAlign: 'auto',
    textTransform: 'none',
    fontSize: 'md',
    overflow: 'hidden',
    textAlignVertical: 'center',
  });

  const { children, ...rest } = props;
  const { theme } = useTheme();

  const computedStyle = getStyle(theme, props);

  return (
    <RNText style={computedStyle.text} {...rest}>
      {children}
    </RNText>
  );
};

export { Text };
