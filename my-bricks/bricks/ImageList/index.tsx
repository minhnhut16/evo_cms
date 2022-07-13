import Spacing from 'my-bricks/components/Spacing';
import { blockNames, CATEGORY } from 'my-bricks/utils/constant';
import {
  getBackgroundColorsSideEditProps, getFontSizeEditProps,
  getNumberSideEditProps,
  getRangeSideEditProps, getTextColorsSideEditProps,
} from 'my-bricks/utils/sideProps';
import {
  bgColors, fontSizes, mappingGridMdTailwind, mappingGridTailwind, textColors, ValueColor,
} from 'my-bricks/utils/styles';
import {
  types, Repeater,
} from 'react-bricks/frontend';
import classname from 'utils/classname';

const imageItemName = blockNames.ImageItem;

interface Props {
  col?: string,
  colMobile?: string,
  bg?: ValueColor
  paddingX?: number,
  paddingY?: number,
  itemTitleFontSize?: string,
  itemContentFontSize?: string,
  itemTitleColor?: ValueColor,
  itemContentColor?: ValueColor,
  itemBg?: ValueColor
  itemPaddingX?: number,
  itemPaddingY?: number,
}

const defaultProps = {
  col: '4',
  colMobile: '2',
  paddingX: 15,
  paddingY: 15,
  bg: bgColors.transparent.value,
  itemTitleFontSize: fontSizes.lg.value,
  itemTitleColor: textColors.gray900.value,
  itemContentFontSize: fontSizes.sm.value,
  itemContentColor: textColors.purple500.value,
  itemBg: bgColors.white.value,
  itemPaddingX: 15,
  itemPaddingY: 15,
};

const ImageList:types.Brick<Props> = ({
  bg, col, paddingX, paddingY, colMobile, itemTitleFontSize,
  itemContentFontSize, itemTitleColor, itemContentColor,
  itemBg, itemPaddingX, itemPaddingY,
}: Props) => {
  console.log(itemTitleFontSize);
  return (
    <Spacing px={`${paddingX}px`} py={`${paddingY}px`}>
      <div className={classname(bg.className, 'rounded-xl m-2')}>
        <Repeater
          propName={imageItemName}
          renderWrapper={(items) => <div className={`grid ${mappingGridTailwind[colMobile]} ${mappingGridMdTailwind[col]} gap-2`}>{items}</div>}
          itemProps={{
            titleFontSize: itemTitleFontSize,
            contentFontSize: itemContentFontSize,
            titleColor: itemTitleColor,
            contentColor: itemContentColor,
            bg: itemBg,
            paddingX: itemPaddingX,
            paddingY: itemPaddingY,
          }}
        />
      </div>
    </Spacing>

  );
};

ImageList.schema = {
  name: blockNames.ImageList,
  label: 'Image List',
  category: CATEGORY,
  getDefaultProps: () => ({ ...defaultProps }),
  repeaterItems: [
    {
      name: imageItemName,
      itemType: blockNames.ImageItem,
      itemLabel: 'Image item',
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout Content',
      defaultOpen: true,
      props: [
        getBackgroundColorsSideEditProps({}),
        getRangeSideEditProps({
          name: 'paddingX', label: 'Padding X', min: 0, max: 300,
        }),
        getRangeSideEditProps({
          name: 'paddingY', label: 'Padding Y', min: 0, max: 300,
        }),

        getTextColorsSideEditProps({ name: 'itemTitleColor', label: 'Item Title color' }),
        getTextColorsSideEditProps({ name: 'itemContentColor', label: 'Item Content color' }),
        getFontSizeEditProps({ name: 'itemTitleFontSize', label: 'Item Title font-size' }),
        getFontSizeEditProps({ name: 'itemContentFontSize', label: 'Item Content font-size' }),
        getBackgroundColorsSideEditProps({ name: 'itemBg', label: 'Item Background' }),
        getRangeSideEditProps({
          name: 'itemPaddingX', label: 'Item Padding X', min: 0, max: 300,
        }),
        getRangeSideEditProps({
          name: 'itemPaddingY', label: 'Item Padding Y', min: 0, max: 300,
        }),
        getNumberSideEditProps({
          name: 'col', label: 'Number of collumn desktop', min: 1, max: 12,
        }),
        getNumberSideEditProps({
          name: 'colMobile', label: 'Number of collumn mobile', min: 1, max: 12,
        }),
      ],
    },

  ],
};

ImageList.defaultProps = defaultProps;

export default ImageList;
