waitkey
=======

[![NPM][1]](https://nodei.co/npm/waitkey/)

Utility function to wait specified keypress from stdin

Installation
------------

Install with `npm`:

``` bash
$ npm install waitkey
```

Or add it to the `"dependencies"` section of your _package.json_ file.

Example
-------

``` js
var waitkey = require('./index');

waitkey('space', function() {
	// your callback bits
});
```

[1]: https://nodei.co/npm/waitkey.png?downloads=true&stars=true
