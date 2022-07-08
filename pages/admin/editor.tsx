import React from 'react';
import Head from 'next/head';
import { Admin, Editor } from 'react-bricks';

const AdminEditor: React.FC = () => (
  <Admin>
    <Head>
      <title>Editor</title>
    </Head>
    <Editor />
  </Admin>
);

export default AdminEditor;
