import type { ReactElement } from 'react';
import LayoutDefault from '../components/layout/default';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Page;
