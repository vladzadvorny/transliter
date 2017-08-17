# Transliter

[![NPM Version](https://img.shields.io/npm/v/transliter.svg)](https://www.npmjs.com/package/transliter)
[![NPM Download](https://img.shields.io/npm/dm/transliter.svg)](https://www.npmjs.com/package/transliter)
[![License](https://img.shields.io/npm/l/transliter.svg)](https://github.com/vladzadvorny/transliter/blob/master/LICENSE)

Transliterate Russian, Ukrainian, Bulgarian, Macedonian, etc. cyrillic text to latin and URL generation

### Translation charmap:

Translation charmap based on [ISO 9 system B](https://en.wikipedia.org/wiki/ISO_9)

## Installation:

```sh
$ npm install transliter
```

## Usage:
### Node.js

```javascript
const { transliter, slugify } = require('./index');

transliter('Транслитерируемый текст');
//-> Transliteriruemy`j tekst

slugify('Создание ссылки')
//-> sozdanie-ssylki
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
      slugify('Создание ссылки')
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
    transliter: ['transliter', 'slugify']
  }
});

requirejs(['transliter', 'slugify'], function(transliter, slugify) {
  console.log(transliter('Транслитерируемый текст'));
  console.log(slugify('Создание ссылки'));
});
```
