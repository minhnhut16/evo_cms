import { types } from 'react-bricks/frontend';
import {
  bgColors, borderRadiuss, fontSizes, textColors,
} from './styles';

export const getBackgroundColorsSideEditProps = ({ name = 'bg', label = 'Background' }: {name?: string, label?: string}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bgColors.white,
      bgColors.light,
      bgColors.gray,
      bgColors.lightBlue,
      bgColors.green,
      bgColors.orange,
      bgColors.darkBlue,
      bgColors.dark,
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
  name = 'range', label = 'Range', min = 0, max = 2000,
}: {name?: string, label?: string, min?: number, max?:number}):types.ISideEditProp => ({
  name,
  label,
  type: types.SideEditPropType.Range,
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
