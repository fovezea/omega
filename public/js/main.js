require.config({
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
		'ko': 'lib/knockout-2.0.0.min',
		'underscore': 'lib/underscore-1.2.2.min',
		'timeago': 'lib/jquery.timeago'
	}
});

require(['jquery'], function ($) {

	$(function () {
		if (!isLocalStorageSupported) {
			alert("Your browser is very out of date. To use Ω, please use a newer browser."); // TODO: graceful degradation
			return;
		}

		console.log('started');
	});
	
	function isLocalStorageSupported() {
		try {
			return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
			return false;
		}
	}

});

