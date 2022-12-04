/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
// UI lib component
// Local UI components
import PageHeader from '../PageHeader';
// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
/**
 * PageLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
function PageLayout({ children }) {
  /* ********************************** HOOKS ********************************* */

  /* ******************************** RENDERING ******************************* */

  return (
    <div className="page-layout">
      <PageHeader />
      {children}
      <footer />
    </div>
  );
}

export default PageLayout;
