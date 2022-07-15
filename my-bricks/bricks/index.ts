import { types } from 'react-bricks/frontend';
import ImageTextBlock from './ImageTextBlock';
import Spacer from './Spacer';
import ImageList from './ImageList';
import ItemImage from './ImageList/Item';
import TextContent from './TextContent';
import Slick from './Slick';

const bricks: types.Brick<any>[] = [
  ImageTextBlock,
  Spacer,
  ImageList,
  ItemImage,
  TextContent,
  Slick,
  // Example custom brick
  // Put here your other bricks...
];

export default bricks;
