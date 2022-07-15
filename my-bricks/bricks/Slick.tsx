import { blockNames, CATEGORY } from 'my-bricks/utils/constant';
import { getBooleanSideEditProps } from 'my-bricks/utils/sideProps';
import { bgColors, ValueColor } from 'my-bricks/utils/styles';
import { Repeater, types } from 'react-bricks';
import classname from 'utils/classname';

const imageItemName = blockNames.ImageItem;

interface Props {
  bg?: ValueColor,
  stop?: boolean
}

const defaultProps = {
  bg: bgColors.white.value,
  stop: false,
};

const Slick: types.Brick<Props> = ({ stop, bg }:Props) => (
  <div className={classname('rounded-xl p-2 m-2 overflow-hidden', bg.className)}>
    <div className={classname('flex', !stop && 'animate-translateHorizol')}>
      <Repeater
        propName={imageItemName}
        renderItemWrapper={(item) => <div className="w-[100px] px-2">{item}</div>}
      />
    </div>
  </div>
);

Slick.defaultProps = defaultProps;

Slick.schema = {
  name: blockNames.Slick,
  label: 'Slick',
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
    getBooleanSideEditProps({ name: 'stop', label: 'Stop' }),
  ],

};
export default Slick;
