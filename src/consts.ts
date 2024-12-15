// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "en";
export const SITE_TAB = "Mirthz_Blog";
export const SITE_TITLE = "Mirthz 👀";
export const SITE_DESCRIPTION = "Cyber security Blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Mirthz";
export const USER_SITE = "https://mirthz.xyz"
export const USER_AVATAR = "/Nyan_Cat_Human_ver.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
}

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "material-symbols:home-outline-rounded", target: "_self" }, // Home page
  { id: "about", text: "My timeline", href: "/about", svg: "material-symbols:info-outline-rounded", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "review",
        text: "Review",
        href: "/blog/categories/review",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // review category
      {
        id: "writeup",
        text: "Writeup",
        href: "/blog/categories/writeup",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // writeup category
    ],
  }, // Blog page with sub-items
  // {
  //   id: "project",
  //   text: "Project",
  //   href: "/project",
  //   svg: "material-symbols:code-blocks-outline",
  //   target: "_self",
  // }, // Projects page
  {
    id: "friend",
    text: "Friend",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:mirthzna@mirthz.xyz", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// Social media and contact icons
export const socialIcons = [
  // {
  //   href: "https://afdian.net/a/saroprock",
  //   ariaLabel: "Support my work",
  //   title: "Support my work",
  //   svg: "ri:cup-line",
  // },
  {
    href: "https://github.com/BaBaPreorder",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  // {
  //   href: "https://tryhackme.com/r/p/MirthZ",
  //   ariaLabel: "Tryhackme",
  //   title: "Tryhackme",
  //   svg: "si-tryhackme",
  // },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "ri:rss-line",
  },
];
