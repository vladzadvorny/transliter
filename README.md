# Transliter

[![NPM Version](https://img.shields.io/npm/v/transliter.svg)](https://www.npmjs.com/package/transliter)
[![NPM Download](https://img.shields.io/npm/dm/transliter.svg)](https://www.npmjs.com/package/transliter)
[![License](https://img.shields.io/npm/l/transliter.svg)](https://github.com/vladzadvorny/transliter/blob/master/LICENSE)

Transliterate Russian, Ukrainian, Bulgarian, Macedonian, etc. cyrillic text to
latin and URL generation

### Translation charmap:

Translation charmap based on
[ISO 9 system B](https://en.wikipedia.org/wiki/ISO_9)

## Installation:

```sh
$ npm install transliter
```

## Usage:

### Node.js

```javascript
const { transliter, slugify, isCyrillic } = require('transliter');

transliter('Транслитерируемый текст');
//-> Transliteriruemy`j tekst

slugify('Создание ссылки');
//-> sozdanie-ssylki

slugify('Создание ссылки с назначаемым разделителем', '_');
//-> sozdanie_ssylki_s_drugim_razdelitelem

isCyrillic('Привет, мир!'); //-> true
isCyrillic('Hello, World!'); //-> false
```

### Browser:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Transliter</title>
</head>
<body>
  <script src="dist/transliter.js"></script>
  <script>
    console.log(
      transliter('Транслитерируемый текст'),
      slugify('Создание ссылки'),
      isCyrillic('Привет, мир!')
    );
  </script>
</body>
</html>
```

### AMD:

```javascript
requirejs.config({
  baseUrl: './dist/',
  bundles: {
    transliter: ['transliter', 'slugify', 'isCyrillic']
  }
});

requirejs(['transliter', 'slugify', 'isCyrillic'], function(
  transliter,
  slugify,
  isCyrillic
) {
  console.log(
    transliter('Транслитерируемый текст'),
    slugify('Создание ссылки'),
    isCyrillic('Привет, мир!')
  );
});
```
