import React from 'react';
import {
  types,
} from 'react-bricks/frontend';

import { blockNames, CATEGORY } from 'my-bricks/utils/constant';
import {

  getRangeSideEditProps,

} from 'my-bricks/utils/sideProps';
import Spacing from 'my-bricks/components/Spacing';

interface Props {
  size?: number
}

const defaultProps = {
  size: 0,
};

const Spacer: types.Brick<Props> = ({ size }: Props) => (
  <Spacing pt={`${size}px`}>
    <div />
  </Spacing>
);

//= ============================
// Brick Schema
//= ============================
Spacer.schema = {
  name: blockNames.Spacer,
  label: 'Spacer',
  getDefaultProps: () => ({ ...defaultProps }),
  category: CATEGORY,
  sideEditProps: [getRangeSideEditProps({
    name: 'size', label: 'Size', min: 0, max: 200,
  })],
};

Spacer.defaultProps = defaultProps;
export default Spacer;
