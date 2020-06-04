const cipher = require('./cipher');

describe('cipher', () => {
    it('encrypts a lower case letter', () => {
        expect(cipher('a')).toBe('b');
    });
    it('encrypts a lower case letter', () => {
        expect(cipher('d')).toBe('e');
    });
    it('encrypts an Upper case letter', () => {
        expect(cipher('F')).toBe('G');
    });
    it('wraps z to a in lower case', () => {
        expect(cipher('z')).toBe('a');
    });
    it('wraps Z to A in upper case', () => {
        expect(cipher('Z')).toBe('A');
    });
    it('encrypts words', () => {
        expect(cipher('Chicken')).toBe('Dijdlfo');
    });
    it('encrypts sentences', () => {
        expect(cipher('a cat a hat')).toBe('b dbu b ibu');
    });
    it(`doesn't encrypt puctionation like ' and .`, () => {
        expect(cipher('Don\'t be a hero')).toBe('Epo\'u cf b ifsp');
    });
});