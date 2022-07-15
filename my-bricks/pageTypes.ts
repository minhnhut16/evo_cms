import { types } from 'react-bricks/frontend';

const pageTypes: types.IPageType[] = [
  {
    name: 'landing',
    pluralName: 'landings',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
  {
    name: 'page',
    pluralName: 'Pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
];

export default pageTypes;
