Transliterate Russian, Ukrainian, Bulgarian, Macedonian, etc. cyrillic text to latin and url generation

#### Translation charmap:

Translation charmap based on ISO 9 system B [ISO 9](https://en.wikipedia.org/wiki/ISO_9)

#### Installation:

```sh
$ npm install transliter
```

#### Example:

```javascript
const { transliter, slugify } = require('./index');

transliter('Хто небудь тут гаворыць па-русску?');
    // Belorussian: Khto nebud` tut gavory`cz` pa-russku?

 slugify('Съешь ещё этих мягких французских булок, да выпей же чаю!')
    // Russian: sesh-eshhyo-etikh-myagkikh-franczuzskikh-bulok-da-vypej-zhe-chayu
