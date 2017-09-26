# unshort-url

A Node.js helper for getting full url from short ones.

## Instalation
```bash
npm i -S unshort-url
```

And in the file where you will use it, just type:

```js

const unshort = require('unshort-url');

unshort(<url>)
  .then((<full-url>) => console.log(<full-url>))
```

Tested with:

`Ghipy` short urls: `http://gph.is/13K9ldQ`

`Google` short urls: `https://goo.gl/CQToH4`
