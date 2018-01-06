# react-scripts

This package includes a customized version of the scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).

The packages and template have been adapted to work as a crazy simple, opinionated static site generator using bootstrap and a custom config format.

The design goals for this project:
* Make it as quick as possible to get *something meaningful* in your local browser.
* Make adding new content as quick as possible, while still allowing the content itself to be arbitrarily complex.
* Separate *form* from *content* - Writing a new `entry` only requires adding a new item to the `entries.js` file.
* Automate the boring stuff - nested nav generation, site and page metadata for search engine crawlers, static html generation, browser tab titles.
* Automatic, sane and customizable sharing, following and commenting for each post with prepopulated social media links, a mailing list and Disqus.
* One-step deployment: run `npm build` and `scp` the `build` directory to my hosting service's `public_html` directory.

To see an example of a full site using this framework, check out [my portfolio page](https://karlhiner.com/).

*Disclaimer: This project was built to suit the needs of the author, and in particular the portfolio page above.
Although it is somewhat expressive, it is not designed to be highly robust and extensible.  For more complex projects,
expect to modify the code generated in `src/app` to suit your needs.*

Please refer to the documentation for the site-generator:

... and to the original `create-react-app` documentation:
* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
