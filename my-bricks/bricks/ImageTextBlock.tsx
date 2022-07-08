import React from 'react';
import {
  Text, RichText, types,
} from 'react-bricks/frontend';
import {
  bgColors, borderRadiuss, fontSizes, textColors, ValueColor,
} from 'my-bricks/utils/styles';
import { blockNames, CATEGORY } from 'my-bricks/utils/constant';
import {
  getBackgroundColorsSideEditProps,
  getBooleanSideEditProps, getBorderRadiusSideEditProps,
  getFontSizeEditProps, getImageSideEditProps,
  getRangeSideEditProps,
  getTextColorsSideEditProps,
  getTextSideEditProps,
} from 'my-bricks/utils/sideProps';
import classname from 'utils/classname';
import Button from 'my-bricks/components/Button';

interface ImageTextBlockProps {
  bg?: ValueColor
  titleFontSize?: string,
  contentFontSize?: string,
  titleColor?: ValueColor,
  contentColor?: ValueColor,
  bgImage?: types.IImageSource,
  wrapperHeight? :number,
  showButton?: boolean,
  btnText?: string,
  btnBorderRadius?: string,
  btnBg?: ValueColor,
  btnFontSize?: string,
  btnFontColor?: ValueColor,
  btnPaddingX? : number,
  btnPaddingY? : number,
}

const ImageTextBlock: types.Brick<ImageTextBlockProps> = ({
  bg, titleFontSize, contentFontSize, titleColor,
  contentColor, bgImage, wrapperHeight, showButton,
  btnText, btnBorderRadius,
  btnBg, btnFontSize, btnFontColor, btnPaddingX, btnPaddingY,
}: ImageTextBlockProps) => (

  <div
    className={classname('rounded-xl p-2 m-2 bg-no-repeat bg-cover relative', bg.className)}
    style={{ backgroundImage: bgImage && `url('${bgImage.src}')`, height: `${wrapperHeight}px` }}
  >
    <div className="text-center mt-6">
      <Text
        propName="title"
        placeholder="title..."
        renderBlock={({ children }) => (
          <h3
            className={classname('font-bold', titleFontSize, titleColor.className)}
          >
            {children}
          </h3>
        )}
      />
      <RichText
        propName="content"
        placeholder="content..."
        renderBlock={({ children }) => (
          <p
            className={classname(contentFontSize, contentColor.className)}
          >
            {children}
          </p>
        )}
      />
      {showButton
        && (
        <Button
          borderRadius={btnBorderRadius}
          bg={btnBg.className}
          fontSize={btnFontSize}
          fontColor={btnFontColor.className}
          paddingX={btnPaddingX}
          paddingY={btnPaddingY}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          {btnText}
        </Button>
        )}
    </div>
  </div>
);

//= ============================
// Brick Schema
//= ============================
ImageTextBlock.schema = {
  name: blockNames.ImageTextBlock,
  label: 'Image Text Block',
  category: CATEGORY,
  sideEditProps: [
    {
      groupName: 'Layout Content',
      defaultOpen: true,
      props: [
        getBackgroundColorsSideEditProps({}),
        getTextColorsSideEditProps({ name: 'titleColor', label: 'Title color' }),
        getTextColorsSideEditProps({ name: 'contentColor', label: 'Content color' }),
        getFontSizeEditProps({ name: 'titleFontSize', label: 'Title font-size' }),
        getFontSizeEditProps({ name: 'contentFontSize', label: 'Content font-size' }),
        getImageSideEditProps({ name: 'bgImage', label: 'Background Image' }),
        getRangeSideEditProps({ name: 'wrapperHeight', label: 'Wrapper height' }),
        getBooleanSideEditProps({ name: 'showButton', label: 'Show Button' }),
      ],
    },
    {
      groupName: 'Button Content',
      show: (props: ImageTextBlockProps) => props.showButton,
      defaultOpen: true,
      props: [
        getTextSideEditProps({ name: 'btnText', label: 'Button Text' }),
        getBorderRadiusSideEditProps({ name: 'btnBorderRadius', label: 'Button border radius' }),
        getBackgroundColorsSideEditProps({ name: 'btnBg', label: 'Button background' }),
        getFontSizeEditProps({ name: 'btnFontSize', label: 'Button Font Size' }),
        getTextColorsSideEditProps({ name: 'btnFontColor', label: 'Button color' }),
        getRangeSideEditProps({
          name: 'btnPaddingX', label: 'Button Padding X', min: 0, max: 300,
        }),
        getRangeSideEditProps({
          name: 'btnPaddingY', label: 'Button Padding Y', min: 0, max: 300,
        }),
      ],
    },
  ],
};

ImageTextBlock.defaultProps = {
  bg: bgColors.white.value,
  titleFontSize: fontSizes.lg.value,
  titleColor: textColors.gray900.value,
  contentFontSize: fontSizes.sm.value,
  contentColor: textColors.gray500.value,
  bgImage: null,
  wrapperHeight: 500,

  showButton: false,
  btnBorderRadius: borderRadiuss.md.value,
  btnText: 'Button',
  btnBg: bgColors.blue.value,
  btnFontSize: fontSizes.lg.value,
  btnFontColor: bgColors.white.value,
  btnPaddingX: 20,
  btnPaddingY: 10,
};

export default ImageTextBlock;
