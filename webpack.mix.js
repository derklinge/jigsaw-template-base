const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');

mix.setResourceRoot('/assets/build');

mix.jigsaw()
    .js('source/_assets/js/main.js', 'js')
    .css('source/_assets/css/main.css', 'css', [
        require('postcss-import'),
        require('postcss-url'),        
        require('tailwindcss/nesting'),
        require('tailwindcss'),
    ])
    .options({
        processCssUrls: true,
    })
    .browserSync({
        server: 'build_local',
        files: ['build_local/**'],
    })
    .sourceMaps(mix.inProduction())
    .version();
