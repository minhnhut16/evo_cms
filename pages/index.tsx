import React, { useContext } from 'react';
import {
  ReactBricksContext,
  PageViewer,
  fetchPage,
  cleanPage,
  types,
} from 'react-bricks/frontend';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import config from '../my-bricks/config';
import Layout from '../components/layout';
import ErrorNoKeys from '../components/errorNoKeys';
import ErrorNoHomePage from '../components/errorNoHomePage';

interface HomeProps {
  page: types.Page
  error: string
}

const Home: React.FC<HomeProps> = ({ page, error }) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useContext(ReactBricksContext);

  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null;

  return (
    <Layout>
      {pageOk && (
        <>
          <Head>
            <title>{page.meta.title}</title>
            <meta name="description" content={page.meta.description} />
          </Head>
          <PageViewer page={pageOk} />
        </>
      )}
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!config.apiKey) {
    return { props: { error: 'NOKEYS' } };
  }
  try {
    const page = await fetchPage('landing-demo-1', config.apiKey, context.locale);
    console.log(page, ';;;;;');
    return { props: { page } };
  } catch {
    return { props: { error: 'NOPAGE' } };
  }
};

export default Home;
