# Basic Jigsaw Starter-Kit

A very basic
[Jigsaw](https://jigsaw.tighten.co/)
project starter-kit extending the initial default setup provided by Jigsaw's
_init_
command.

## Features:**

- [Browsersync](https://browsersync.io/)
- Source-Maps generation
- [Web Fonts, self-hosted or via CDN)](#web-fonts)

### Web Fonts

Custom web fonts are supported using locally available files (self-hosted) or
using a CDN (i.e. Google Fonts).

#### Self-hosted

First install the font package via `npm` from the project root, i.e.
[Barlow](https://fontsource.org/fonts/barlow)
from
[Fontsource](https://fontsource.org/):

```bash
npm i -D @fontsource/barlow
```

Update the main stylesheet `source/_assets/css/main.css` to include the
custom web font definition & font files:

```css
@import '@fontsource/barlow';
```

Add the font to Tailwind's theme in `tailwind.config.js` by extending it:

```js

// ...

module.exports = {

  // ...

  theme: {

    extend: {

      fontFamily: {

        // CSS class name to use the font, automatically prefixed with 'font-'.

        'custom-barlow': [ 

          // Font reference name, see the font's documentation or source files.

          'Barlow',

          // Fallback font(s) to use if custom font is unavailable.

           ...defaults.fontFamily.sans
        ],

        // ...

      },

    },

  },

  // ...

};
```

You may now reference the new font in your template files by using its CSS class
name, e.g.:

```html
<h1 class="font-custom-barlow text-green-600 font-4xl">
  Howdy, Pardner!
</h1>
```
