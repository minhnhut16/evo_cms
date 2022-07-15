/* eslint-disable react/jsx-props-no-spreading */
import {
  Image, RichText, Text, types,
} from 'react-bricks';
import {
  bgColors, fontSizes, textColors, ValueColor,
} from 'my-bricks/utils/styles';
import { blockNames, CATEGORY } from 'my-bricks/utils/constant';
import classNames from 'classnames';
import Spacing from 'my-bricks/components/Spacing';

interface Props {
  titleFontSize?: string,
  titleColor?: ValueColor,
  contentFontSize?: string,
  contentColor?: ValueColor,
  bg?: ValueColor,
  paddingX?: number,
  paddingY?: number,
  imgWidth?: string,
  imgHeight?: string
}

const defaultProps = {
  titleFontSize: fontSizes.lg.value,
  titleColor: textColors.gray900.value,
  contentFontSize: fontSizes.sm.value,
  contentColor: textColors.purple500.value,
  bg: bgColors.white.value,
  paddingX: 0,
  paddingY: 0,
  imgWidth: '100%',
  imgHeight: 'auto',
};

const ImageItem:types.Brick<Props> = ({
  titleFontSize, titleColor, contentFontSize, contentColor, bg, paddingX, paddingY, imgWidth, imgHeight,
}:Props) => (
  <Spacing px={`${paddingX}px`} py={`${paddingY}px`}>
    <div className={classNames(bg.className)}>
      <Image
        propName="image"
        alt="upload image"
        imageStyle={{
          width: imgWidth,
          height: imgHeight,
        }}
      />
      <div className={classNames('font-bold', titleFontSize, titleColor.className)}>
        <Text
          propName="title"
          placeholder="title..."
          renderBlock={(props:any) => (
            <h3
              {...props.attributes}
            >
              {props.children}
            </h3>
          )}
        />
      </div>
      <div className={classNames(contentFontSize, contentColor.className)}>
        <RichText
          propName="content"
          placeholder="content..."
          renderBlock={(props:any) => (
            <p
              {...props.attributes}
            >
              {props.children}
            </p>
          )}
        />
      </div>

    </div>
  </Spacing>
);

ImageItem.schema = {
  name: blockNames.ImageItem,
  label: 'Image Item',
  category: CATEGORY,
  getDefaultProps: () => ({ ...defaultProps }),
};

ImageItem.defaultProps = defaultProps;

export default ImageItem;
