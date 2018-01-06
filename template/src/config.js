export default {
  // `siteName` is used for the main site title in the nav, prepended to browser tab names for each route,
  // and for titles in site metadata used by crawlers.
  siteName: 'React Bootstrap Site',
  // `shareName` is an optional different name to use in share posts. Defaults to `siteName` value.
  shareName: '',
  // If you have a Disqus account, find your shortname under /admin/settings/general.
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
