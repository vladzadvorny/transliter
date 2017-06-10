Transliterate Russian, Ukrainian, Bulgarian, Macedonian, etc. cyrillic text to latin

#### Translation tables:

Russian: [ГОСТ 7.79-2000](http://docs.cntd.ru/document/1200026226) 

Ukrainian: [Постанова від 27.01.2010 № 55](http://zakon3.rada.gov.ua/laws/show/55-2010-%D0%BF)

Belorussian geographic: [Постановление Р.Б. от 23.11.2000 г. №15](https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%B1%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82%D0%B0_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B5%D0%B9)

All cyrillic, based on ISO 9 system B (Russian, Belorussian, Ukrainian, Bulgarian, Macedonian, etc.) [ISO 9](https://en.wikipedia.org/wiki/ISO_9)

Languages | Code | Tables
--- | --- | ---
Russian | ru |  gost7.79-2000, iso9-system-b
Belorussian | by | geographic, iso9-system-b
Ukrainian | ua | 55-2010-p, iso9-system-b
Bulgarian | bg | iso9-system-b
Macedonian | mk | iso9-system-b
Serbian | rs | iso9-system-b

#### Installation:

```sh
$ npm install transliter
```

#### Example:

```javascript
var transliter = require('transliter');

// Default table: ISO 9 system B for all languages
transliter('Хто небудь тут гаворыць па-русску?');
    // Belorussian: Khto nebud` tut gavory`cz` pa-russku?

// Options
var opts = {
  lang: 'ru'
};
transliter('Привет, мир', opts); 
    // Russian: Privet, mir

// or...
var opts = {
  lang: 'ua',
  table: '55-2010-p'
};
transliter('Україна це Європа', opts); 
    // Ukrainian: Ukrаinа tse Yevropа 
    
// URL generation
transliter('Мразиш по пътя всичко газиш...', { url: true }); 
    // Bulgarian: mrazish-po-ptya-vsichko-gazish
