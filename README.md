# react-scripts-bootstrap-site-generator

_This is old stuff. As of 2023, you should probably use Vite or somesuch._

This [npm package](https://www.npmjs.com/package/react-scripts-bootstrap-site-generator) builds on top of the default [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts) configuration and scripts used by [Create React App](https://github.com/facebookincubator/create-react-app).

It's designed to work as a crazy simple, opinionated static site generator using React, Bootstrap and a custom config format.

To see an example of a full site using this framework, check out [my blog](https://karlhiner.com/).

## Design goals
* Make it as quick as possible to get *something meaningful* in the browser
* Make adding new content as quick as possible, while still allowing content to be arbitrarily complex
* Separate form from content - writing a new entry should only require touching one file for the usual case
* Automate the boring stuff - nested nav generation, site and page metadata for search engine crawlers, static html generation, browser tab titles
* Automatic social media stuff per-post
* Straightforward deployment: run `npm build` and `scp` the `build` directory to my hosting service's `public_html` directory
* A modern stack with all the trimmings, including a precommit hook for automatic style-enforcement and sass support with file watching

*Disclaimer: This project was built to suit the needs of the author, and in particular the blog site above.
Although it is somewhat expressive, it is not designed to be highly robust and extensible.  For more complex projects,
expect to modify the code generated in `src/app` to suit your needs.*

## Setting up a new site

```bash
$ npm install -g create-react-app
$ create-react-app my-app --scripts-version react-scripts-bootstrap-site-generator
$ cd my-app
$ npm install
$ npm start
```

That's it!

Your browser should load a new tab to `localhost:3000` and you'll be greeted with the example app:

![](https://user-images.githubusercontent.com/685394/34689739-74293480-f46b-11e7-844b-6dabbfe01d4e.gif)

If you want a collapsable sliding-animated sidebar for your posts instead of in the top navbar (say if you have too many to fit in the navbar), you can specify `entriesInSidebar: true` in the `config.js` file, and you'll get something like this:

![](https://user-images.githubusercontent.com/685394/34689986-4b7ca25a-f46c-11e7-8e8a-31b83d94f725.gif)

## Adding new pages and content

All content is specified in the form of `entries`.
In your created app, you'll find all of the example app content in `src/entries.js`, along with the following documentation:

### Example of a simple `entry`

```JSX
{
  path: '/example_section/post',
  title: 'Another Sweet Post',
  disqusId: 'AnotherSweetPost',
  date: 'Jan 3 2017',
  description: 'Non-structured description',
  content: 'Simple content',
},
```

That's all it takes to generate a dropdown nav item and summary card in the index page linking to a separate page with content, including prepopulated social media share links and a Disqus comment section!

Here's a more complex one with documentation explaining all the keys:

### Example `entry` with documentation

```JSX
{
  // `path` is a relative URL path for the entry
  // Nav dropdowns automatically group paths with identical first segments.
  // Top-level nav titles are derived from these paths by replacing underscores with spaces and capitalizing all words.
  // Only a single level of nesting will have meaningful results (no dropdowns within dropdowns).
  path: '/top_level_item/post',
  // `title` will be used for headers in the entry's summary card and content page.
  // It's also used for Nav labels, browser tab labels and page titles in header metadata for search engines and such.
  title: 'My Sweet Post',
  // You can override the title used in the summary card with something more descriptive.
  summaryTitle: 'This just in! My Sweet Post',
  // If provided, `date` is displayed as a subheader for the entry's summary card and content page.
  // Summary cards are ordered reverse-chronologically with newest posts on top.
  // To be sorted correctly, date strings must be parseable by Javascript's `Date.parse(...)`
  // If no date is provided, the entry will still get its own nav and page, but will not be included in the summary list.
  // This is useful for static, unchanging pages like an 'About' section that aren't considered "Posts"
  date: 'Jan 1 2017',
  // A `disqusId` must be provided, along with a `disqusShortname` in `src/config.js` to render a Disqus comment section
  // below the entry on its page.
  disqusId: 'MySweetPost',
  // This description will be rendered directly in the entry's summary card.
  // If no `descriptionPlainText` is provided, it will also be used to populate social media sharing posts,
  // so if it's an object (like this jsx) rather than a string, you'll probably want a plain text version as well.
  description: (
    <div>
      <p>
        Here is my sweet post description!
      </p>
      <img src="https://media2.giphy.com/avatars/100soft/WahNEDdlGjRZ.gif" alt="sweet gif" style={{width: '25%'}}/>
    </div>
  ),
  // As mentioned above, this is used for descriptions whenever plain text is the only option, like in social media share bodies
  descriptionPlainText: 'This content will be used for content in share links like Email, Twitter and Facebook.',
  // `content` can contain anything renderable in a React component.  A string, or any arbitrary jsx!
  // For real posts, I recommend defining content in seperate files and `import`ing them above :)
  content: (
    <div>
      <p>This is my sweet post content!</p>
    </div>
  ),
  // 'article' is the default and looks similar to a blogpost on Wordpress.
  // 'showcase' uses a Bootstrap `well` to surround the content - it is currently the only other built-in type.
  type: 'article',
}
```

## Modifying styles

Add any styles to `src/style.scss`.  This file is loaded after the default styles and `npm start` watches all `.scss` files
for changes while the app is running and regenerates a `.css` file next to its `.scss` file, resulting in a hot reload.

## Configuration

See `src/config.js` for all config options:

```JXS
export default {
  // `siteName` is used for the main site title in the nav, prepended to browser tab names for each route,
  // and for titles in site metadata used by crawlers.
  siteName: 'React Bootstrap Site',
  // `shareName` is an optional different name to use in share posts. Defaults to `siteName` value.
  shareName: '',
  // If you have a Disqus account, find your shortname under your Disqus page's /admin/settings/general.
  // Populate this and add a `disqusId` to each post you'd like to embed a Disqus comment section at the bottom
  disqusShortname: '',
  // The full qualified hostname where this site will live.
  // Without this field, all sharing links & disqus comments will be excluded.
  host: 'https://my-cool-site.com',
  // Include this for a 'Contact' link on the right of the top nav.
  email: 'my-email@gmail.com',
  // Optionally provide a list of { label: '...', href: '...' } pairs to display as simple links pulled right in the nav
  topLevelLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/',
    },
  ],
  // Fill in your handle to include in Twitter share links
  twitterHandle: '',
  // If you have a MailChimp list, find these in the generated embed forms at
  // https://us17.admin.mailchimp.com/lists/integration/embeddedcode
  // to include a formatted 'Subscribe' link and dropdown in the top nav
  mailChimpFormAction: '',
  mailChimpInputName: '',
  // Change the 'Subscribe' link to a 'Share & Subscribe' link with share icons?
  // (Or add a 'Share' link if no mailChimp fields populated)
  showShareNavItem: false,
}
```

## Building & Deploying

For an optimized build ready for deployment:

```bash
$ npm run build
```

In addition to the usual `create-react-app` build, this will also run [`react-snapshot`](https://github.com/geelen/react-snapshot/)
to perform static pre-renderering of all routes.

To deploy, just copy the contents of that build folder to your hosting service however you'd like!

## Configuration additions to Create React App

### Pre-rendering into static HTML files based on react-router routes
I followed this guide to get static HTML links and and SEO titles working using react-snapshot and react-helmet.

### Sass
I followed this guid to add support for the CSS preprocessor, Sass.

### Linting and automatic styling
I followed this guide for a nice default eslint setup using AirBnb's eslint rules and prettier, and made modifications to Prettier settings in package.json.

## Create React App info
For more information about `create-react-app` and how to configure and extend it, please refer to the original documentation:
* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
