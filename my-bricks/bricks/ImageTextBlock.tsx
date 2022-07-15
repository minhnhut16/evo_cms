import React from 'react';
import {
  RichText, types,
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
import LinkButton from 'my-bricks/components/LinkButton';

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
  href? :string
}

const defaultProps = {
  bg: bgColors.white.value,
  titleFontSize: fontSizes.lg.value,
  titleColor: textColors.gray900.value,
  contentFontSize: fontSizes.sm.value,
  contentColor: textColors.purple500.value,
  bgImage: null,
  wrapperHeight: 500,

  showButton: false,
  btnBorderRadius: borderRadiuss.md.value,
  btnText: 'Button',
  btnBg: bgColors.blue.value,
  btnFontSize: fontSizes.lg.value,
  btnFontColor: textColors.gray700.value,
  btnPaddingX: 20,
  btnPaddingY: 10,
  href: '',
};

const ImageTextBlock: types.Brick<ImageTextBlockProps> = ({
  bg, titleFontSize, contentFontSize, titleColor,
  contentColor, bgImage, wrapperHeight, showButton,
  btnText, btnBorderRadius,
  btnBg, btnFontSize, btnFontColor, btnPaddingX, btnPaddingY, href,
}: ImageTextBlockProps) => (

  <div
    className={classname('rounded-xl p-2 m-2 bg-no-repeat bg-cover relative', bg.className)}
    style={{ backgroundImage: bgImage && `url('${bgImage.src}')`, height: `${wrapperHeight}px` }}
  >
    <div className="text-center mt-6">
      <RichText
        propName="title"
        placeholder="title..."
        renderBlock={({ children }) => (
          <h3
            className={classname(titleFontSize, titleColor.className)}
          >
            {children}
          </h3>
        )}
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link,
          types.RichTextFeatures.UnorderedList,
          types.RichTextFeatures.Quote,
        ]}
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
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link,
          types.RichTextFeatures.UnorderedList,
          types.RichTextFeatures.Quote,
        ]}
      />
      {showButton
        && (
          <div className="absolute bottom-8 w-full text-center">
            {
              href
                ? (
                  <LinkButton
                    target="_blank"
                    borderRadius={btnBorderRadius}
                    bg={btnBg.className}
                    fontSize={btnFontSize}
                    fontColor={btnFontColor.className}
                    paddingX={btnPaddingX}
                    paddingY={btnPaddingY}
                    href={href}
                  >
                    {btnText}
                  </LinkButton>
                )
                : (
                  <Button
                    borderRadius={btnBorderRadius}
                    bg={btnBg.className}
                    fontSize={btnFontSize}
                    fontColor={btnFontColor.className}
                    paddingX={btnPaddingX}
                    paddingY={btnPaddingY}
                  >
                    {btnText}
                  </Button>
                )
            }
          </div>
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
  getDefaultProps: () => ({ ...defaultProps }),
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
        getTextSideEditProps({ name: 'href', label: 'Button link' }),
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

ImageTextBlock.defaultProps = defaultProps;

export default ImageTextBlock;
