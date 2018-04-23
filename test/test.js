const { transliter, slugify, isCyrillic } = require('../index');
const assert = require('assert');

describe('Using transliter', () => {
  it('simple using', () => {
    const expectedResult = 'Transliteriruemy`j tekst';
    const result = transliter('Транслитерируемый текст');
    assert(result === expectedResult);
  });

  it('Using slugify', () => {
    const expectedResult = 'sozdanie-ssylki';
    const result = slugify(
      'Создание                          ссылки           '
    );
    console.log(result);
    assert(result === expectedResult);
  });

  it('Using slugify with separator', () => {
    const expectedResult = 'sozdanie_ssylki_s_drugim_razdelitelem';
    const result = slugify('Создание ссылки с другим разделителем', '_');
    assert(result === expectedResult);
  });

  it('Using isCyrillic', () => {
    const resultTrue = isCyrillic('Привет, мир!');
    const resultFalse = isCyrillic('Hello, World!');
    assert(resultTrue && !resultFalse);
  });
});
