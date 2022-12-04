/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import { Link } from 'gatsby';
// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageHeader() {
  /* ********************************** HOOKS ********************************* */

  // Localization

  /* ******************************** RENDERING ******************************* */
  return (
    <header className="page-header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          site title
        </Link>
      </h1>
      <ul className="languages">
        <Link to="/">en</Link>
        <Link to="/">fr</Link>
      </ul>
    </header>
  );
}

export default PageHeader;
