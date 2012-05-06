xbox-node
=========

A node.js wrapper for the Xbox search API

## How to use it

```js

var xbox = require("xbox-node");

xbox.search("halo", function(response) {

  // do whatever you want with the response.
  // the response is in JSON

});

```
