const defaults = require('tailwindcss/defaultTheme');

module.exports = {
 content: require('fast-glob').sync([
    'source/**/*.{blade.php,blade.md,md,html,vue}',
    '!source/**/_tmp/*' // exclude temporary files
  ],{ dot: true }),
  theme: {
    extend: {
      // Extend the default theme with custom fonts here.
      //
      // CSS class names are prefixed with `font-` automatically.
      // Also see 'source/_assets/css/main.css' for font definition processing.
      //
      fontFamily: {
        'custom-barlow': ['Barlow', ...defaults.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
