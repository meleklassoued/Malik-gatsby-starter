/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
// Style
import './index.scss';
// helpers & utils

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageHeader() {
  /* ********************************** HOOKS ********************************* */
  // Localization
  const [showLanguages, setShowLanguages] = useState(false);
  const { languages, originalPath, i18n } = useI18next();
  /* ********************************* HELPERS ******************************** */
  // get slanguage :
  const getLanguage = () => i18n.language || window.localStorage.i18nextLng;

  function RenderLanguagesList() {
    return (
      <div className="languges-container position-absolute bg-primary bg-white d-flex flex-column align-items-center">
        {languages.map((lang) => (
          <Link to={originalPath} language={lang} key={lang}>
            {lang}
          </Link>
        ))}
      </div>
    );
  }
  /* ******************************** RENDERING ******************************* */
  return (
    <header className="page-header d-flex align-items-center justify-content-between px-3">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="text-white">
          site title
        </Link>
      </h1>
      <button
        type="button"
        className="all-unset positon-relative "
        onClick={() => setShowLanguages(!showLanguages)}
      >
        {getLanguage()}
        {showLanguages && <RenderLanguagesList />}
      </button>
    </header>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["HomePage", "Common"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default PageHeader;
