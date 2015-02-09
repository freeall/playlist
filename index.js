var events = require('events');
var riot = require('riot');
require('./playlist.tag');
riot.mount('playlist');

module.exports = function(opts) {
	var that = new events.EventEmitter();

	that.appendTo = function(el, opts) {
		riot.mountTo(el, 'playlist', opts)
	};

	return that;
};