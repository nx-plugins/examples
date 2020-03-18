module.exports = {
    // Tailwind Paths
    configJS: 'apps/sample-app/tailwind.config.js',
    sourceCSS: 'apps/sample-app/src/tailwind-build.scss',
    outputCSS: 'apps/sample-app/src/tailwind.scss',
    // Sass
    sass: true,
    // PurgeCSS Settings
    purge:false,
    keyframes: false,
    fontFace: false,
    rejected: false,
    whitelist: [],
    whitelistPatterns: [],
    whitelistPatternsChildren: [],
    extensions: [
      '.ts',
      '.html',
      '.js'
    ],
    extractors: [],
    content: []
  }
  