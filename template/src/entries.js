import React from 'react'

const entries = [
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
    date: 'Jan 1 2018',
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
  },
  {
    path: '/example_section/post',
    title: 'Another Sweet Post',
    date: 'Jan 3 2018',
    description: 'Non-structured description',
    content: 'Simple content',
  },
  {
    path: '/example_section/other_post',
    title: 'Yet Another Totally Rad Post',
    date: 'Jan 1 2018',
    description: 'Another non-structured description',
    content: 'More simple content',
  },
  {
    path: '/static_page',
    title: 'Static Page',
    content: "This content won't show up in the summary list since it doesn't have a date. Good for 'About' sections and the like.",
  },
]

export default entries
