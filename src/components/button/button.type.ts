import { PressableProps as RNButtonProps } from 'react-native';

import {
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  LoadingPropsType,
  OpacityPropsType,
  PositionPropsType,
  AccessoriesPropsType,
  TextPropsType,
  ZIndexPropsType,
  BackgroundPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '~/@types/types';

export interface ButtonProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    DimensionPropsType,
    PositionPropsType,
    FlexPropsType,
    LoadingPropsType,
    AccessoriesPropsType,
    DisabledPropsType,
    TextPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ButtonPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    VariantPropsType {}
