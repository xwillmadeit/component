(function () {

	var speed = 0.5;

	window.onscroll = function() {
		var parallaxs = document.querySelectorAll('.parallax'),
			offset = window.pageYOffset * speed;

		parallaxs.forEach(function(parallax, i) {
			parallax.style.backgroundPosition = '0 ' + offset + 'px';
		});
	}

})();