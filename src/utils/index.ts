/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import { Dimensions } from 'react-native';

type functionType = () => void;

const WINDOW = Dimensions.get('window');

export const WINDOW_WIDTH = WINDOW.width;
export const WINDOW_HEIGHT = WINDOW.height;

// is the value an empty array?
export const isEmptyArray = (value?: unknown) =>
  Array.isArray(value) && value.length === 0;

// is the given object a Function?
export const isFunction = (obj: unknown): obj is functionType =>
  typeof obj === 'function';

// is the given object an Object?
export const isObject = (obj: unknown): obj is Record<string, unknown> =>
  obj !== null && typeof obj === 'object';

// is the given object an integer?
export const isInteger = (obj: unknown): boolean =>
  String(Math.floor(Number(obj))) === obj;

// is the given object a string?
export const isString = (obj: unknown): obj is string =>
  Object.prototype.toString.call(obj) === '[object String]';

// is the given object a NaN?
// eslint-disable-next-line no-self-compare
export const isNaN = (obj: unknown): boolean => obj !== obj;

// Does a React component have exactly 0 children?
export const isEmptyChildren = (children: unknown): boolean =>
  React.Children.count(children) === 0;

// is the given object/value a promise?
export const isPromise = (value: unknown): value is PromiseLike<unknown> =>
  isObject(value) && isFunction(value.then);

export const getSpecificProps = <T extends object>(obj: T, ...keys: string[]) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});

export const removeSpecificProps = <T extends Record<string, unknown>>(
  obj: T,
  ...keys: string[]
): T =>
  keys.reduce((a, c) => {
    // eslint-disable-next-line no-param-reassign
    delete a[c];
    return a;
  }, obj);
