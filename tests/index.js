const { expect } = require('chai'); // eslint-disable-line import/no-extraneous-dependencies
const unshort = require('../index');

describe('unshort method', function () { // eslint-disable-line func-names, prefer-arrow-callback, no-undef
  it('should return the full url from a short one', function () { // eslint-disable-line func-names, prefer-arrow-callback, no-undef
    const shortURL = 'http://gph.is/13K9ldQ';
    const expected = 'https://giphy.com/gifs/cheezburger-no-bird-g69ZPJfLy7hD2';
    return unshort(shortURL).then((url) => {
      expect(url).to.eql(expected);
    });
  });
});
