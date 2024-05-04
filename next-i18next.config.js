const path = require('path');

module.exports = {
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
