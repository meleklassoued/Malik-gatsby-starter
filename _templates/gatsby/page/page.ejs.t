---
to: src/pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.js
---
<% const pageName = h.changeCase.pascal(name) -%>
<% const pagePath = h.inflection.dasherize(h.inflection.underscore(name)) -%>
<% const pageTitle = h.inflection.humanize(h.inflection.underscore(name)) -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation} from 'gatsby-plugin-react-i18next';

// Local UI components
import PageLayout from '../shared/PageLayout';
import { Seo } from '../shared/Seo';


// Style
import '../page-styles/<%= pageName %>.scss';

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function <%= pageName %>() {
  /* ********************************** HOOKS ********************************* */

  // Localization
  const { t } = useTranslation();

  /* ******************************** RENDERING ******************************* */
  return (
    <PageLayout>
      <Seo title="<%= pageTitle %>" />
      <div className="<%= pagePath %>">
      welcome to "<%= pageTitle %>"
      </div>
    </PageLayout>
  );
}

/* ******************************* Fetch Locals ******************************* */
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["<%= pageName %>", "Common"] }
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

export default <%= pageName %>;
