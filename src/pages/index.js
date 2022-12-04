/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

// UI lib components

// UI local components
import PageLayout from '../shared/PageLayout';
import { Seo } from '../shared/Seo';
// style
import '../page-styles/index.scss';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  /* ********************************** HOOKS ********************************* */

  // Localization
  const { t } = useTranslation();
  /* ******************************** RENDERING ******************************* */
  return (
    <PageLayout>
      <Seo title="HomePage" />
      <div>
        <p>{t('Home')}</p>
      </div>
    </PageLayout>
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

export default IndexPage;
