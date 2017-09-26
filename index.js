require('es6-promise').polyfill();
require('isomorphic-fetch');

function unshort(shortenURL) {
  if (!shortenURL) {
    console.warn('Missing a url to fetch'); // eslint-disable-line no-undef, no-console
    return '';
  }

  return fetch(shortenURL).then((response) => { // eslint-disable-line no-undef
    if (response.status !== 200) {
      throw new Error('Unable to get the page');
    }

    return response.url;
  });
}

module.exports = unshort;
