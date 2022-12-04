---
to: "<%= `src/page-components/${h.changeCase.pascal(page)}/${h.changeCase.pascal(name)}/index.js`%>"
---
<% const componentName = h.changeCase.pascal(name) -%>
<% const componentPath = h.inflection.dasherize(h.inflection.underscore(name)) -%>
<% const componentTitle = h.inflection.humanize(h.inflection.underscore(name)) -%>
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React, { useState } from 'react';


// UI lib comoponents


// Local UI components
// @TODO: Import other locally-made dependencies here

// Redux actions and selectors
// @TODO: If using Redux, import actions and selectors

// Helpers & utils
// @TODO: Import any helper or service here

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function <%= componentName  %>({ name, radius }) {
  /* ******************************** CONSTANTS ******************************* */

  const PI = 3.14;

  /* ************************ ESSENTIAL LOCAL VARIABLES *********************** */

  const a = 2 * PI;

  /* ********************************** HOOKS ********************************* */

  // State
  const [selectedRadius, setSelectedadius] = useState(radius || 0);

  // Other hooks like reux or localization ...

  /* ***************************** LOCAL VARIABLES **************************** */

  const perimeter = a * selectedRadius;

  /* ******************************** CALLBACKS ******************************* */
  /**
   * Computes the perimeter
   */
  function onClickComputePerimeter() {
    setSelectedadius(65);
  }
  /* ***************************** RENDER HELPERS ***************************** */

  /**
   * Renders the footer
   * @returns {React.Element} The rendered footer
   */
  function getFooter() {
    return <div className="footer-section">Footer</div>;
  }
  /* ******************************** RENDERING ******************************* */

  return (
    <div className="<%= componentPath  %>" fluid>
      <div className="title-section">
        <div debug>{name}</div>
        <div debug>
          <button type="button" onClick={onClickComputePerimeter}>
            {`Circle: ${perimeter}`}
          </button>
        </div>
      </div>
      <br />
      {getFooter()}
    </div>
  );
}



export default <%= componentName  %>;
