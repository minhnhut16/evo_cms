import { types } from 'react-bricks/frontend';
import {
  bgColors, borderRadiuss, fontSizes, tagNames, textAligns, textColors,
} from './styles';

export const getBackgroundColorsSideEditProps = ({ name = 'bg', label = 'Background' }: {name?: string, label?: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bgColors.transparent,
      bgColors.white,
      bgColors.gray,
      bgColors.blue,
      bgColors.green,
      bgColors.orange,
      bgColors.gradientBlueWhite,
    ],
  },
});

export const getFontSizeEditProps = ({ name, label }: {name: string, label: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      fontSizes.sm,
      fontSizes.base,
      fontSizes.lg,
      fontSizes.xl,
      fontSizes['2xl'],
      fontSizes['4xl'],
    ],
  },
});

export const getTagNameEditProps = ({ name, label }: {name: string, label: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      tagNames.p,
      tagNames.h1,
      tagNames.h2,
      tagNames.h3,
      tagNames.h4,
    ],
  },
});

export const getTextColorsSideEditProps = ({ name = 'textColor', label = 'Text color' }: {name?: string, label?: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      textColors.gray500,
      textColors.gray600,
      textColors.gray700,
      textColors.gray800,
      textColors.gray900,
      textColors.purple500,
    ],
  },
});

export const getTextAlignsSideEditProps = ({ name = 'textAlign', label = 'Text align' }: {name?: string, label?: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      textAligns.center,
      textAligns.left,
      textAligns.right,
    ],
  },
});

export const getBorderRadiusSideEditProps = ({ name = 'borderRadius', label = 'Border radius' }: {name?: string, label?: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      borderRadiuss.none,
      borderRadiuss.sm,
      borderRadiuss.md,
      borderRadiuss.lg,
      borderRadiuss['2xl'],
      borderRadiuss['4xl'],
      borderRadiuss.full,
      borderRadiuss.xl,
    ],
  },
});

export const getImageSideEditProps = ({ name = 'image', label = 'Image' }: {name?: string, label?: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Image,
});

export const getRangeSideEditProps = ({
  name = 'range', label = 'Range', min = 0, max = 2000, step = 1,
}: {name?: string, label?: string, min?: number, max?:number, step?:number}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Range,
  rangeOptions: {
    min,
    max,
    step,
  },
});

export const getNumberSideEditProps = ({
  name = 'number', label = 'number', min = 0, max = 2000,
}: {name?: string, label?: string, min?: number, max?:number}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Number,
  rangeOptions: {
    min,
    max,
  },
});

export const getBooleanSideEditProps = ({ name = 'check', label = 'Check' }: {name?: string, label?: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Boolean,
});

export const getTextSideEditProps = ({ name = 'text', label = 'Text' }: {name?: string, label?: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Text,
});
