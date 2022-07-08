import React, { ReactNode } from 'react';

import Header from './header';

interface LayoutProps {
  children?: ReactNode,
  header?: ReactNode
}

const defaultProps: LayoutProps = {
  children: null,
  header: undefined,
};

const Layout: React.FC<LayoutProps> = ({ children, header }) => (
  <div className=" bg-gray-500 h-screen overflow-hidden sm:py-8">
    <div className="sm:w-[416px] h-full mx-auto sm:rounded-lg bg-gray-200 h-[calc(100vh_-_170px) overflow-hidden">
      {header !== undefined ? (
        <>
          {header}
          <div
            className="h-screen sm:h-[calc(100vh_-_64px)] overflow-y-auto"
            id="layout-container"
            data-testid="layout-container"
          >
            {children}
          </div>
        </>
      ) : (
        <>
          <Header />
          <div
            className="mt-[78px] h-[calc(100vh_-_78px)] sm:h-[calc(100vh_-_143px)] overflow-y-auto"
            id="layout-container"
            data-testid="layout-container"
          >
            {children}
          </div>
        </>
      )}
    </div>
  </div>

);

Layout.defaultProps = defaultProps;

export default Layout;
