# Temporary [nextjs]( https://github.com/zeit/next.js) repo for testing RTL using [styled-jsx](https://github.com/zeit/styled-jsx)

This is an URL based approach on switching locale/language with nextjs.

The main concern here is applying the required RTL CSS when needed. Along with right-aligining the text; borders, padding, margins and other styles should also be changed as needed to display the content correctly.

The approach is summarized as follows:

1. Use a custom server and routes to accomodate `localhost:3000/en/<route>` and `localhost:3000/ar/<route>`.
2. Pass the locale key from the requested URL to components to determine the direction.
3. Set the `dir` attribute for `html` accordingly.
4. Use CSS selectors in the format`:global(html[dir=rtl]) .someClass` to apply required styles.

Use `npm run dev` to start the development server locally
