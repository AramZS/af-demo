window.vimeoPlayerActivation = false;
window.vimeoPlayerFSState = false;

window.navfade = function() {
	document.querySelector('nav').classList.toggle('fade');
	document.querySelector('section.pages-container').classList.toggle('focus-mode');
};

window.navfadeRemove = function() {
	console.log('[Vimeo Player] navfadeRemove called');
	document.querySelector('nav').classList.remove('fade');
	document.querySelector('section.pages-container').classList.remove('focus-mode');
};

window.vimeoPlayerActivation = function() {
	window.vimeoPlayerActivation = true;
	const iframe = document.querySelector('iframe#teaser-frame');
	const player = new Vimeo.Player(iframe);

	player.on('pause', function() { 
		console.log('[Vimeo Player] paused the video!');
		window.navfadeRemove();
	});

	player.on('play', function() {
		console.log('[Vimeo Player] played the video!');
		player.getFullscreen().then(function(fullscreen) {
			if (fullscreen)	{
				console.log('[Vimeo Player] is in fullscreen mode by user action');
			} else {
				/*player.requestFullscreen().then(function() {
					console.log('[Vimeo Player] is placed in fullscreen mode');
					window.vimeoPlayerFSState = true;
				}).catch(function(error) {
					// an error occurred
					window.vimeoPlayerFSState = false;
				});*/
				window.navfade();
				document.querySelector('body').addEventListener('click', window.navfadeRemove);
				document.querySelector('section.pages-container').addEventListener('click', window.navfadeRemove);
				document.querySelector('section#teaser').addEventListener('click', window.navfadeRemove);
				document.querySelector('iframe#teaser-frame').addEventListener('click', window.navfadeRemove);
			}
		}).catch(function(error) {
			console.log('[Vimeo Player] could not determine fullscreen state', error)
		});		
	});

	player.on('ended', function() {
		console.log('[Vimeo Player] ended the video!');
		player.getFullscreen().then(function(fullscreen) {
			if (fullscreen && !window.vimeoPlayerFSState)	{
				console.log('[Vimeo Player] ends in fullscreen mode by user action');
			} else {
				/*player.exitFullscreen().then(function() {
					console.log('[Vimeo Player] is set exited from fullscreen mode');
					window.vimeoPlayerFSState = false;
				}).catch(function(error) {
					// an error occurred
					window.vimeoPlayerFSState = false;
				});*/
				window.navfade();
			}
		}).catch(function(error) {
			console.log('[Vimeo Player] could not determine fullscreen state', error)
		});		
	});

	player.getVideoTitle().then(function(title) {
		console.log('[Vimeo Player] title:', title);
	});


}

window.addEventListener("scroll", window.navfadeRemove, { passive: true });

setTimeout(function() {
	if (!window.vimeoPlayerActivation) {
		vimeoPlayerActivation();
	}
}, 3000);
