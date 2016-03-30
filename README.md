xbox-node
=========

A node.js wrapper for the Xbox search API

## How to use it

The xbox-node module is super easy to use.

To request the module, type:

```js

var xbox = require("xbox-node");

```

To search for XBOX ONE TITLES:

```js

var xbox = require("xbox-node");

xbox.searchOne("halo", function(response) {

  // do whatever you want with the response.
  // the response is in JSON

});

```

And searching for XBOX 360 TITLES:


```js

xbox.searchOne("halo", function(response) {

  // do whatever you want with the response.
  // the response is in JSON

});

```