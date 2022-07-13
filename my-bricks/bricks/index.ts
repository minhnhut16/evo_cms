import { types } from 'react-bricks/frontend';
import ImageTextBlock from './ImageTextBlock';
import Spacer from './Spacer';
import ImageList from './ImageList';
import ItemImage from './ImageList/Item';
import TextContent from './TextContent';

const bricks: types.Brick<any>[] = [
  ImageTextBlock,
  Spacer,
  ImageList,
  ItemImage,
  TextContent,
  // Example custom brick
  // Put here your other bricks...
];

export default bricks;
