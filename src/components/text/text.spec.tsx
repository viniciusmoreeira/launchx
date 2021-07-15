import React from 'react';

import { render } from '@testing-library/react-native';

import { Text } from './text.component';
import { TextProps } from './text.type';

jest.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({
    theme: {},
  }),
}));

const TestText: React.FC<TextProps> = (props) => (
  <Text fontSize={16} color="#000" {...props} />
);

describe('@text: component checks', () => {
  it('should render text passed to children', () => {
    const component = render(<TestText>Hello LaunchX</TestText>);

    expect(component.queryByText('Hello LaunchX')).toBeTruthy();
  });

  it('should render component passed to children', () => {
    const component = render(
      <TestText>
        <Text testID="testText" fontSize={16} color="#000">
          Hello LaunchX
        </Text>
      </TestText>,
    );

    expect(component.queryByTestId('testText')).toBeTruthy();
  });
});
