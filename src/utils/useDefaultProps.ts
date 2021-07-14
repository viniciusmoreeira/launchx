/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { DefaultProps, VariantPropsType } from '~/@types/types';
import { useTheme } from '~/context';
import { ThemeType } from '~/styles/themes/type';

export const useDefaultProps = <Props extends object>(
  componentName: keyof NonNullable<ThemeType['components']> | null,
  props: Props & VariantPropsType,
  defaultProps: DefaultProps<Props>,
) => {
  const { theme } = useTheme();

  const finalProps = React.useMemo(() => {
    if (!componentName) {
      return {
        ...defaultProps,
        ...props,
      };
    }

    const propsFromTheme = {
      ...(theme.components?.[componentName] ?? {}),
      ...(props.variant &&
        (theme.components?.[componentName]?.variants?.[props.variant] ?? {})),
    };

    delete propsFromTheme.variants;

    const mergedProps = {
      ...defaultProps,
      ...propsFromTheme,
      ...props,
    };

    return mergedProps;
  }, [componentName, defaultProps, props, theme.components]);

  return finalProps as Props & Required<typeof defaultProps>;
};
