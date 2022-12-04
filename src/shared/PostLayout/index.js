/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
// UI lib components
// Local UI components
import PageLayout from '../PageLayout';
// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
/**
 * Layout component for MDX files
 */
function PostLayout() {
  return (
    <PageLayout>
      <div className="post-layout">post Layout</div>
    </PageLayout>
  );
}

export default PostLayout;
