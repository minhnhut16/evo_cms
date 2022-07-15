/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */
import React from 'react';
import {
  RichText,
  types,
} from 'react-bricks/frontend';

import { blockNames, CATEGORY } from 'my-bricks/utils/constant';
import {

  getFontSizeEditProps,
  getTagNameEditProps, getTextAlignsSideEditProps, getTextColorsSideEditProps,

} from 'my-bricks/utils/sideProps';
import {
  fontSizes, tagNames, textAligns, textColors, ValueColor,
} from 'my-bricks/utils/styles';
import classname from 'utils/classname';

interface Props {
  textAlign?: string,
  tagName?: keyof JSX.IntrinsicElements,
  fontSize?: string,
  color?: ValueColor,
}

const defaultProps = {
  textAlign: textAligns.center.value,
  tagName: tagNames.h4.value,
  fontSize: fontSizes.lg.value,
  color: textColors.gray600.value,
};

const Text: types.Brick<Props> = ({
  textAlign, tagName, fontSize, color,
}: Props) => (
  <RichText
    propName="content"
    placeholder="content..."
    renderBlock={({ children }) => {
      const TagName = tagName;
      return (
        <TagName
          className={classname(textAlign, fontSize, color.className)}
        >
          {children}
        </TagName>
      );
    }}
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
);

//= ============================
// Brick Schema
//= ============================
Text.schema = {
  name: blockNames.TextContent,
  label: 'Text Content',
  getDefaultProps: () => ({ ...defaultProps }),
  category: CATEGORY,
  sideEditProps: [
    getTextColorsSideEditProps({ name: 'color', label: ' Color' }),
    getFontSizeEditProps({ name: 'fontSize', label: 'Font-size' }),
    getTagNameEditProps({ name: 'tagName', label: 'Tag Name' }),
    getTextAlignsSideEditProps({ name: 'textAlign', label: 'Text align' }),
  ],
};

// Text.defaultProps = defaultProps;

export default Text;
