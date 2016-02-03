(function () {
    'use strict';

    
	var app = {
		init: function () {
			routes.init();
		}
	};

	var routes = {

	    oldUrl: "",
	    newUrl: "",
	    oldHash: "",
	    newHash: "",

		init: function () {
			window.addEventListener('hashchange', function (event) {
				console.log(event);

				this.newUrl = event.newURL.split('#');
				this.oldUrl = event.oldURL.split('#');

				this.newHash = this.newUrl[1];
				console.log('newHash: ' + this.newHash);

				this.oldHash = oldUrl[1];
				console.log('oldHash: ' + this.oldHash);

				sections.toggle(oldHash, newHash);

			}, false);
		}
	};

	var sections = {
		toggle: function (oldroute, route) {
			// Oldroute uitzetten

			// route aanzetten

		}
	};

	app.init();

})();






















