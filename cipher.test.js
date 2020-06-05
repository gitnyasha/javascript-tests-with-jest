const cipher = require('./cipher');

describe('cipher', () => {
  it('keeps the same case', () => {
    expect(cipher('z')).toBe('a');
  });
  it('returns a ciphered text', () => {
    expect(cipher('Book')).toBe('Cppl');
  });
  it('doesn\'t encrypt punctuation like \' and .', () => {
    expect(cipher('Don\'t be a hero')).toBe('Epo\'u cf b ifsp');
  });
});
