/* eslint-disable react/jsx-props-no-spreading */
import { ReactBricks } from 'react-bricks/frontend';
import type { AppProps } from 'next/app';
import config from '../my-bricks/config';

import '../css/style.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ReactBricks {...config}>
    <Component {...pageProps} />
  </ReactBricks>
);

export default MyApp;
