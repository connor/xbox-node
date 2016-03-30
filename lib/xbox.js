var request = require("request");

exports.search360 = function(title, callback) {

	var URLToRequest = "http://marketplace.xbox.com//en-US/SiteSearch/xbox/?query=" + encodeURIComponent(title);

	request(URLToRequest, function ( error, response, body ) {
		callback(body);
	});

}

exports.searchOne = function(title, callback) {

var URLToRequest = "http://store.xbox.com/en-US/SiteSearch/xbox/?query=" + + "&PageSize=25";

	request(URLToRequest, function (error, response, body) {
		callback(body);
	});

}
