const { transliter, slugify } = require('./index');

it('Using transliter', () => {
  var expectedResult = 'Transliteriruemy`j tekst';
  var result = transliter('Транслитерируемый текст');
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it('Using slugify', () => {
  var expectedResult = 'sozdanie-ssylki';
  var result = slugify('Создание ссылки');
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
