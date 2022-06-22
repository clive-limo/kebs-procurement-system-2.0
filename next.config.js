/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  env: {
    FIREBASE_API_KEY: 'AIzaSyDHlMd3adOL1bDJVGMmA9GJJFhC_o5PtNQ',
    FIREBASE_AUTH_DOMAIN: 'procurement-development-3db01.firebaseapp.com',
    FIREBASE_DATABASE_URL:
      'https://procurement-development-3db01-default-rtdb.firebaseio.com',
    FIREBASE_PROJECT_ID: 'procurement-development-3db01',
    FIREBASE_STORAGE_BUCKET: 'procurement-development-3db01.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '96235188839',
    FIREBASE_APP_ID: '1:96235188839:web:0b432a590248526f049ac2',
    FIREBASE_MEASUREMENT_ID: 'G-S7XWF02EBK',
  },
});
