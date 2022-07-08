/* eslint-disable no-unused-vars */

export type TextColorName =
  | 'gray900'
  | 'gray800'
  | 'gray700'
  | 'gray600'
  | 'gray500'
  | 'purple500'

export type BgColorName =
  | 'white'
  | 'light'
  | 'gray'
  | 'lightBlue'
  | 'orange'
  | 'green'
  | 'darkBlue'
  | 'dark'
  | 'blue'
  | 'gradientBlueWhite'

export type FontSizeName =
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '4xl'

export type BorderRadiusName =
  | 'none'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '4xl'
  | 'full'

export type ValueColor = {
  color: string
  className: string
}

type Select = {
  label: string,
  value: string
}

type SelectColor = {
  label: string
  value: ValueColor
}

type TextColors = { [key in TextColorName]: SelectColor }
type BgColors = { [key in BgColorName]: SelectColor }
type FontSizes = { [key in FontSizeName]: Select }
type BorderRadiuss = { [key in BorderRadiusName]: Select }

export const bgColors: BgColors = {
  white: {
    label: 'White',
    value: { color: '#fff', className: 'bg-white dark:bg-gray-900' },
  },
  light: {
    label: 'Light',
    value: { color: '#f9fafb', className: 'bg-gray-50 dark:bg-gray-800' },
  },
  gray: {
    label: 'Gray',
    value: { color: '#f3f4f6', className: 'bg-gray-100 dark:bg-gray-800' },
  },
  lightBlue: {
    label: 'Light Blue',
    value: { color: '#e0f2fe', className: 'bg-sky-100 dark:bg-gray-800' },
  },
  orange: {
    label: 'Orange',
    value: { color: '#fef3c7', className: 'bg-amber-100 dark:bg-gray-800' },
  },
  green: {
    label: 'Green',
    value: { color: '#ecfccb', className: 'bg-lime-100 dark:bg-gray-800' },
  },
  darkBlue: {
    label: 'Dark Blue',
    value: {
      color: '#0c4a6e',
      className: 'bg-sky-900 dark:bg-gray-800 dark',
    },
  },
  dark: {
    label: 'Dark',
    value: { color: '#111827', className: 'bg-gray-900 dark:bg-gray-900 dark' },
  },
  blue: {
    label: 'Blue',
    value: { color: '#3b82f6', className: 'bg-blue-500' },
  },
  gradientBlueWhite: {
    label: 'Gradient blue to white',
    value: { color: '#6366f1', className: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
  },
};

export const textColors: TextColors = {
  gray900: {
    label: 'Gray900',
    value: { color: '#111827', className: 'text-gray-900 dark:text-gray-100' },
  },
  gray800: {
    label: 'Gray800',
    value: { color: '#1f2937', className: 'text-gray-800 dark:text-gray-100' },
  },
  gray700: {
    label: 'Gray700',
    value: { color: '#374151', className: 'text-gray-700 dark:text-gray-300' },
  },
  gray600: {
    label: 'Gray600',
    value: { color: '#4b5563', className: 'text-gray-600 dark:text-gray-400' },
  },
  gray500: {
    label: 'Gray500',
    value: { color: '#6b7280', className: 'text-gray-500 dark:text-gray-400' },
  },
  purple500: {
    label: 'Purple500',
    value: { color: '#a855f7', className: 'text-purple-500 dark:text-purple-300' },
  },
};

export const fontSizes: FontSizes = {
  sm: {
    label: 'Small',
    value: 'text-sm',
  },
  base: {
    label: 'Medium',
    value: 'text-base',
  },
  lg: {
    label: 'Large',
    value: 'text-lg',
  },
  xl: {
    label: 'Too large',
    value: 'text-xl',
  },
  '2xl': {
    label: 'Too too large',
    value: 'text-2xl',
  },
  '4xl': {
    label: 'Too too too large',
    value: 'text-4xl',
  },
};

export const borderRadiuss: BorderRadiuss = {
  none: {
    label: 'None',
    value: 'rounded-none',
  },
  sm: {
    label: 'Small',
    value: 'rounded-sm',
  },
  md: {
    label: 'Medium',
    value: 'rounded',
  },
  lg: {
    label: 'Large',
    value: 'rounded-lg',
  },
  xl: {
    label: 'Too large',
    value: 'rounded-xl',
  },
  '2xl': {
    label: 'Too too large',
    value: 'rounded-2xl',
  },
  '4xl': {
    label: 'Too too too large',
    value: 'rounded-4xl',
  },
  full: {
    label: 'Full rounded',
    value: 'rounded-full',
  },
};
