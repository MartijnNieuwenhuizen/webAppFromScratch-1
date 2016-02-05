(function () {
    'use strict';

    // Als je je pagina laad zie je nog alle elementen, het is mooi om dit met JS alvast allemaal op display: none;, en je startpagina op display: block; te zetten.
    
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

				this.newUrl = event.newURL.split('#'); // Als je document.querySelector(‘’); gebruikt hoef je je hash niet te slicen
				this.oldUrl = event.oldURL.split('#'); // Je kan ook window.location.hash gebruiken.

				this.newHash = this.newUrl[1]; 
				console.log('newHash: ' + this.newHash);

				this.oldHash = oldUrl[1]; // Je zou door al je artikellen kunnen loopen en deze allemaal op display none zetten als ze niet gelijk zijn aan de ‘newHash’. Zo hoef je je 'oldHash' niet meer op te halen.

				console.log('oldHash: ' + this.oldHash);

				sections.toggle(oldHash, newHash);

			}, false);
		}
	};

	var sections = {
		toggle: function (oldHash, newHash) {

			var oldHashElement,
			    newHashElement = false;


			// Oldroute uitzetten
			if (oldHash) { // Check op je old hash is netjes

				oldHashElement = document.getElementById(oldHash);
				oldHashElement.classList.add('hidden');
			}

			newHashElement = document.getElementById(newHash);
			newHashElement.classList.remove('hidden');

		}
	};

	app.init();

})();






















