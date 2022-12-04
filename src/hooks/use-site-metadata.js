/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import { graphql, useStaticQuery } from 'gatsby';
/* -------------------------------------------------------------------------- */
/*                            useSiteMetaData Hook                            */
/* -------------------------------------------------------------------------- */
export const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `);
  /* ******************************** Rendering ******************************* */
  return data.site.siteMetadata;
};
