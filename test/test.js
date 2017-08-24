const { transliter, slugify } = require('../index');
const assert = require('assert');

describe('Using transliter', () => {
  it('simple using', () => {
    var expectedResult = 'Transliteriruemy`j tekst';
    var result = transliter('Транслитерируемый текст');
    assert(result === expectedResult);
  });

  it('Using slugify', () => {
    var expectedResult = 'sozdanie-ssylki';
    var result = slugify('Создание ссылки');
    assert(result === expectedResult);
  });

  it('Using slugify with separator', () => {
    var expectedResult = 'sozdanie_ssylki_s_drugim_razdelitelem';
    var result = slugify('Создание ссылки с другим разделителем', '_');
    assert(result === expectedResult);
  });
});
