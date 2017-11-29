require('es6-promise').polyfill();
require('isomorphic-fetch');

function unshort(shortenURL) {
  if (!shortenURL) {
    console.warn('Missing a url to fetch'); // eslint-disable-line no-undef, no-console
    return '';
  }

  return fetch(shortenURL, // eslint-disable-line no-undef
    { mode: 'no-cors' })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Unable to get the page');
      }

      return response.url;
    })
    .catch(e => console.error(e.message)); // eslint-disable-line no-undef, no-console
}

module.exports = unshort;
