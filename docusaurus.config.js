const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
//KEEP CALM AND CARRY ON
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KEEP CALM AND CARRY ON',
  tagline: 'The bolg of syuan',
  url: 'https://syuancheng.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'syuancheng', // Usually your GitHub org/user name.
  projectName: 'syuancheng.github.io', // Usually your repo name.
  //deploymentBranch: 'gh-pages',
  trailingSlash: false,
  themeConfig: {
    image: 'img/profile.png',
    googleAnalytics: {
      trackingID: "UA-51754530-2",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'KEEP CALM AND CARRY ON',
      logo: {
        alt: 'KEEP CALM AND CARRY ON',
        src: 'img/profile.jpg',
      },
      items: [
        { to: "about", label: "About", position: "left" },
        { to: "blog-archive", label: "Blog Archive", position: "left" },
        {
          href: 'https://github.com/syuancheng',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'KEEP CALM AND CARRY ON',
          blogDescription: 'The blog of syuan',
          blogSidebarCount: 5,
          postsPerPage: 1,
          path: "./blog",
          routeBasePath: "/", // Set this value to '/'.
          showReadingTime: true,
          editUrl:
            "https://github.com/syuancheng/syuancheng.github.io",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
