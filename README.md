<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby V5 Malik's starter
</h1>

<P align="center">
Gatsby 5 starter created by <a href="https://www.linkedin.com/in/melek-lassoued-%E2%9A%A1%F0%9F%9A%80-27a1981a8/">Melek lassoued⚡🚀</a> A passionate fullStackJS developer.</p>
<br/>
<h1 align="center"> Starter features :</h1>
This starter designed to front-end developers who wants to optimize their times and create static sites .
</br>
</br>
so what's Gatsby.js ?
</br>
Gatsby : is an open-source static site generator built on top of Node.js using React and GraphQL.
<hr>
In this starter we will introduce to you many features will help you to optimize your time and to create a well structured project which will make your life easier to maintain your site in the future.

### This starter supports :

- Boostrap 5
- scss
- i18next
- hygen to : generate conventional code templates
- Airbnb react style guide implementation
  <br>
  <br>
  <br>

# Linting and formating

- Uses ESLint and Prettier working in pair together
- Linting and formatting are enforced (won't compile unless addressed)
- Formatting/Linting is automatically processed on saving files. If linting errors remain unresolved, commit won't go through
- In fact, linting and formatting tasks are also
  installed as a pre-commit hook through Husky
  <br/>
  <br/>
- format your code :

```shell
yarn format:fix
```

- fix your code :

```shell
yarn lint:fix
```

# HUSKY :

- Follows the [_Conventional Committing_](https://www.conventionalcommits.org/en/v1.0.0/) standard

- Feature example: `git commit -m "feat: Closes ISS-1. Ability to login with Apple"`
- Patch example: `git commit -m "fix: Closes ISS-2 and corrects scrolling bug"`
- Major/Breaking change example: `git commit -m "BREAKING CHANGE: Updated website version"`
- Combines feature and breaking change:
- Major/Breaking change example:

  `git commit -m "feat: Closes ISS-1. Ability to login with Apple BREAKING CHANGE: Updated Gatsby version"`

- Commits not impacting versioning:

  - Regular / casual example: `git commit -m "chore: ISS-4 Installed dependencies"`
  - Refactoring example: `git commit -m "refactoring: Refactored component"`
  - Other commit types: _build:, chore:, ci:, docs:, style:, refactor:, perf:, test_

- The standard is linted and Husky will prevent commits from going through if it's not compliant
- Project managers/owners can release satisfying updates and issue version bumps thanks to [standard-version](https://github.com/conventional-changelog/standard-version) by running `yarn release`. This will generate:
- Appropriate tags based on the conventional commit history
- An aggregated `CHANGELOG.md` file update.

## Hygen :

Hygen allows you to generate conventional code templates:
<br/>

install hygen globaly :

```shell
npm i -g hygen
```

### Adding a page :

`hygen gatsby page SomePage`
This will add the following files:

- `pages/some-page`: Gatsby standard page
- `page-styles/SomePage.scss`: A `.scss` style file for the page with root selector defined as `some-page`
  <br/>
  <br/>

### Adding a Page component :

`hygen gatsby component SomeComponent --page SomePage`

This will create a folder for a component associated with the page `SomePage` under `/page-components/SomeComponent`. The folder will contain the following files:

- `SomeComponent.js`: Standard component file
- `SomeComponent.scss`: Standard `.scss` style file for the component imported with the component implementation file
  <br/>
  <br/>

### Adding a Shared component :

`hygen gatsby component SomeWidget`

This will create a folder for a shared component (reusable among pages and other components). The `SomeWidget` folder will contain:

- `SomeWidget.js`: Standard component file
- `SomeWidget.scss`: Standard `.scss` style file for the component imported with the component implementation file

# Folder structure

    .
    ├── src
    ├────── pages => Contains Gatsby pages named with this pattern page-name.js
    ├────── page-styles => Contains style files in .scss for Gatsby pages named with the corresponding page name
    with this pattern PageName.scss
    ├────── page-components => Contains components that are specific to a page named with the corresponding page name with this pattern PageName/ComponentName/ComponentName.js|.scss
    ├────── shared => Shared components, layouts (feel free to add your own extra layouts), helpers and global style
    ├──────────── styles
    ├─────────────────── theme.scsss => Theme global style which can use variables (see file below) as well
    ├─────────────────── _variables.scss => All shared colors, dimensions, font features and visual effects should go here
    ├─────────────────── global.scsss => Other globals than theme globals. Minor but useful.
    ├─────────────────── index.scc => **WARNING** Only touch to use/enable a theme over another
    ├─────────────────── theme-gatsby-default.scsss => Leave as is (for debugging purposes)
    ├──────────── Helpers => Add any redundant logic, driver logic, decoupled code...etc. here
    .
    .
    .
    ├── package.json => dependencies / dev dependencies
    ├
    .
    .
    .
    ├── gatsby-config.js => OK. Use for Gatsby configurations
    ├── gatsby-browser.js => OK. Use for Gatsby configurations
    ├── gatsby-ssr.js => OK. Use for Gatsby configurations only for specific projects with SSR

### Seo Component :

```js
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from 'react';
// Hooks
import { useSiteMetaData } from '../../hooks/use-site-metadata';

/* -------------------------------------------------------------------------- */
/*                                SeoComponent                                */
/* -------------------------------------------------------------------------- */
export const Seo = ({ title, description, pathName, children }) => {
  // Destructuring seo attributes from UseMetaData Hook
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetaData();
  // Seo default props
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathName || ''}`,
    twitterUsername,
  };
  /* ****************************** SEO RENDETING ***************************** */
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};
```
