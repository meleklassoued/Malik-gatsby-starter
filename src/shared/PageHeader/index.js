/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
// Style
import './index.scss';
// helpers & utils

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageHeader() {
  /* ********************************** HOOKS ********************************* */
  // Localization
  const { i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const { changeLanguage, languages } = i18n;
  console.log(languages);
  /* ********************************* HELPERS ******************************** */
  // get slanguage :
  const getLanguage = () => i18n.language || window.localStorage.i18nextLng;

  function RenderLanguagesList() {
    return (
      <div className="languges-container position-absolute bg-primary bg-white d-flex flex-column align-items-center">
        {languages.map((lang) => (
          <button
            type="button"
            key={lang}
            className="all-unset"
            onClick={() => {
              changeLanguage(lang);
            }}
          >
            {lang}
          </button>
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
