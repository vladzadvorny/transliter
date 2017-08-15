const { transliter, slugify } = require('./index');

it('Using transliter', () => {
  var expectedResult = 'Khto nebud` tut gavory`cz` pa-russku?';
  var result = transliter('Хто небудь тут гаворыць па-русску?');
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it('Using slugify', () => {
  var expectedResult =
    'sesh-eshhyo-etikh-myagkikh-franczuzskikh-bulok-da-vypej-zhe-chayu';
  var result = slugify(
    'Съешь ещё этих мягких французских булок, да выпей же чаю!'
  );
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
