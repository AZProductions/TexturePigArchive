// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: []
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   }
// });
// module.exports = widthMDX({
//   basePath: '/docs'
//   // Append the default value with md extensions
//   // pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
// });

module.export = {
  basePath: '/docs',
  assetPrefix: '/docs/'
  // 'process.env.BACKEND_URL': 'https://www.azsoftware.org/docs'
};

module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  // Support loading `.md`, `.mdx`:
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            /* jsxImportSource: …, otherOptions… */
          }
        }
      ]
    });

    return config;
  }
};
