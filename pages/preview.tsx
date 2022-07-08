import React from 'react';
import Head from 'next/head';
import { Preview } from 'react-bricks/frontend';

const PagePreview: React.FC = () => (
  <>
    <Head>
      <title>Preview</title>
    </Head>
    <Preview />
  </>
);

export default PagePreview;
