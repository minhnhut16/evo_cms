/* eslint-disable no-unused-vars */

export type TextColorName =
  | 'gray900'
  | 'gray800'
  | 'gray700'
  | 'gray600'
  | 'gray500'
  | 'purple500'

export type BgColorName =
  | 'transparent'
  | 'white'
  | 'gray'
  | 'orange'
  | 'green'
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

export type TextAlignName =
  | 'left'
  | 'right'
  | 'center'

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
type TextAligns = { [key in TextAlignName]: Select }

export const bgColors: BgColors = {
  transparent: {
    label: 'Transparent',
    value: { color: '#ffffff', className: 'bg-transparent' },
  },
  white: {
    label: 'White',
    value: { color: '#fff', className: 'bg-white' },
  },
  gray: {
    label: 'Gray',
    value: { color: '#f3f4f5', className: 'bg-gray-200' },
  },
  orange: {
    label: 'Orange',
    value: { color: '#F58220', className: 'bg-orange' },
  },
  green: {
    label: 'Green',
    value: { color: '#55c771', className: 'bg-green' },
  },
  blue: {
    label: 'Blue',
    value: { color: '#0276f1', className: 'bg-blue' },
  },
  gradientBlueWhite: {
    label: 'Gradient blue to white',
    value: { color: '#6366f1', className: 'bg-gradient-to-r from-cyan-500 to-blue' },
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

export const mappingGridTailwind = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

export const mappingGridMdTailwind = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
};

export const textAligns: TextAligns = {
  left: {
    label: 'Text left',
    value: 'text-left',
  },
  right: {
    label: 'Text right',
    value: 'text-right',
  },
  center: {
    label: 'Text center',
    value: 'text-center',
  },
};

export const tagNames = {
  p: {
    label: 'p tag',
    value: 'p',
  },
  h1: {
    label: 'h1 tag',
    value: 'h1',
  },
  h2: {
    label: 'h2 tag',
    value: 'h2',
  },
  h3: {
    label: 'h3 tag',
    value: 'h3',
  },
  h4: {
    label: 'h4 tag',
    value: 'h4',
  },
};
