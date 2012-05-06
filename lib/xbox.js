var request = require("request");

exports.search = function(title, callback) {

  var URLToRequest = "http://marketplace.xbox.com//en-US/SiteSearch/xbox/?query=" + encodeURIComponent(title);

  request( URLToRequest, function ( error, response, body ) {

      callback( body )

    }
  )

}
