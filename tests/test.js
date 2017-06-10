var transliter = require('../index');

it('Simple using', () => {
  var expectedResult = 'Khto nebud` tut gavory`cz` pa-russku?';
  var result = transliter('Хто небудь тут гаворыць па-русску?');
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it('Using with option "lang"', () => {
  var opts = {
    lang: 'ru'
  };
  var expectedResult = 'Privet, mir';
  var result = transliter('Привет, мир', opts);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it('Using with options "lang" & "table"', () => {
  var opts = {
    lang: 'ua',
    table: '55-2010-p'
  };
  var expectedResult = 'Ukrаinа tse Yevropа';
  var result = transliter('Україна це Європа', opts);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it('URL generation', () => {
  var expectedResult = 'mrazish-po-ptya-vsichko-gazish';
  var opts = {
    lang: 'bg',
    url: true
  };
  var result = transliter('Мразиш по пътя всичко газиш...', opts);
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
