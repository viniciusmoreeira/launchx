import React from 'react';
import { Image } from 'react-native';

import { render, fireEvent } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { TextProps } from '../text/text.type';
import { Button } from './button.component';
import { ButtonProps } from './button.type';

jest.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({
    theme: {},
  }),
}));

const TestButton = (props: ButtonProps) => <Button fontSize={16} {...props} />;

const TestText: React.FC<TextProps> = (props) => (
  <Text fontSize={16} color="#000" {...props} />
);

describe('@button: component checks', () => {
  it('should render', () => {
    const component = render(<TestButton />);

    expect(component.toJSON()).toBeTruthy();
  });

  it('should render text passed to children', () => {
    const component = render(<TestButton>Hello Space</TestButton>);

    expect(component.queryByText('Hello Space')).toBeTruthy();
  });

  it('should render component passed to children', () => {
    const component = render(
      <TestButton>
        <TestText>Hello Space</TestText>
      </TestButton>,
    );

    expect(component.queryByText('Hello Space')).toBeTruthy();
  });

  it('should render components passed to accessoryLeft or accessoryRight props', () => {
    const AccessoryLeft = (
      <Image
        testID="buttonTestAccessory"
        source={{
          uri:
            'https://img-premium.flaticon.com/png/512/1002/premium/1002595.png?token=exp=1626351710~hmac=7905ba0d3d7e34730d3de53b17314380',
        }}
      />
    );
    const AccessoryRight = (
      <Image
        testID="buttonTestAccessory"
        source={{
          uri:
            'https://img-premium.flaticon.com/png/512/1002/premium/1002595.png?token=exp=1626351710~hmac=7905ba0d3d7e34730d3de53b17314380',
        }}
      />
    );

    const component = render(
      <TestButton
        accessoryLeft={AccessoryLeft}
        accessoryRight={AccessoryRight}
      />,
    );

    const [accessoryLeft, accessoryRight] = component.queryAllByTestId(
      'buttonTestAccessory',
    );

    expect(accessoryLeft).toBeTruthy();
    expect(accessoryRight).toBeTruthy();

    expect(accessoryLeft.props.source.uri).toEqual(
      'https://img-premium.flaticon.com/png/512/1002/premium/1002595.png?token=exp=1626351710~hmac=7905ba0d3d7e34730d3de53b17314380',
    );
    expect(accessoryRight.props.source.uri).toEqual(
      'https://img-premium.flaticon.com/png/512/1002/premium/1002595.png?token=exp=1626351710~hmac=7905ba0d3d7e34730d3de53b17314380',
    );
  });

  it('should call onPress', () => {
    const onPress = jest.fn();

    const component = render(
      <TestButton testID="buttonTestOnPress" onPress={onPress} />,
    );

    fireEvent.press(component.queryByTestId('buttonTestOnPress'));
    expect(onPress).toBeCalled();
  });

  it('should call onPressIn', () => {
    const onPressIn = jest.fn();

    const component = render(
      <TestButton testID="buttonTestOnPressIn" onPressIn={onPressIn} />,
    );

    fireEvent(component.queryByTestId('buttonTestOnPressIn'), 'pressIn');
    expect(onPressIn).toBeCalled();
  });

  it('should call onPressOut', () => {
    const onPressOut = jest.fn();

    const component = render(
      <TestButton testID="buttonTestOnPressOut" onPressOut={onPressOut} />,
    );

    fireEvent(component.queryByTestId('buttonTestOnPressOut'), 'pressOut');
    expect(onPressOut).toBeCalled();
  });
});
