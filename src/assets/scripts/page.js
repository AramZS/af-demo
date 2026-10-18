function setupIndexBackgroundVideo() {
	const videoShell = document.querySelector(".index-video-bg");
	if (!videoShell) {
		return;
	}

	const videoMedia = videoShell.querySelector("video");
	let ticking = false;

	const syncVideoState = () => {
		const viewportHeight = window.innerHeight || 1;
		const threshold = viewportHeight * 1.3;
		let progress = Math.min(window.scrollY / threshold, 1);
		console.log("scroll progress", progress, "scrollY", window.scrollY, "threshold", threshold);
		progress = progress < .2 ? 0 : progress;
		videoShell.style.opacity = String(1 - progress);
		videoShell.classList.toggle("is-hidden", progress >= 1);

		if (videoMedia) {
			if (progress >= 1) {
				videoMedia.pause();
			} else if (videoMedia.paused) {
				videoMedia.play().catch(() => {});
			}
		}
		if (window.scrollY < 5) {
			//console.log("Reached scrollY less than 1076");
			document.querySelector("body").style.setProperty('--background-filter', 'rgba(0, 0, 0, 0.0)');
		}

		if (window.scrollY > 1076 && window.scrollY < 1096) {
			//console.log("Reached scrollY 1076"," opacity target = ", (window.scrollY - 1076) / 100);
			document.querySelector("body").style.setProperty('--background-filter', `rgba(0, 0, 0, ${ (window.scrollY - 1076) / 100 })`);
		}

		if (window.scrollY > 1100 && window.scrollY < 1225) {
			//console.log("Reached scrollY 1105"," opacity target = .20");
			document.querySelector("body").style.setProperty('--background-filter', `rgba(0, 0, 0, .20)`);
		}

		ticking = false;
	};

	const onScroll = () => {
		if (ticking) {
			return;
		}
		ticking = true;
		window.requestAnimationFrame(syncVideoState);
	};

	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener("resize", onScroll, { passive: true });
	syncVideoState();
}

function closeModals(closeButton, targetClose, event, triggerGo) {
	const closeOverlay = function () {
		// iOS Safari does not reliably fire a synthetic "click" on a
		// dynamically-created div, so also handle "touchend". preventDefault
		// stops the synthetic click that would otherwise re-open the overlay.
		closeButton.remove();
		console.log("Closing overlay for headshot", targetClose);
		targetClose.classList.remove("headshot-overlay-active");
		var overlay = targetClose.querySelector('.headshot');
		overlay.classList.remove("headshot");
		setTimeout(() => {
			overlay.classList.add("headshot");
		}, 3000);
	};
	if (triggerGo) {
		closeOverlay();
		return;
	}
	event.preventDefault();
	event.stopPropagation();

	closeButton.addEventListener("click", closeOverlay);
	closeButton.addEventListener("touchend", closeOverlay);
}

function setupImageClickEffects(event) {
	// Listen for every click on an IMG element.
		if (window["image-container-modal"]) {
			return;
		}
		if (document.querySelector(".modal-close-button") && !(event.target.tagName === "IMG" && event.target.classList.contains("magnifiable")) && !(event.target.tagName === "IMG" && event.target.parentElement.classList.contains("headshot") && !event.target.parentElement.parentElement.classList.contains("headshot-overlay-active"))) {
			event.preventDefault();
			event.stopPropagation();
			document.querySelectorAll(".headshot-overlay-active").forEach(el => {
				el.classList.remove("headshot-overlay-active")
				const closeBtn = el.querySelector(".modal-close-button");
				closeModals(closeBtn, el, null, true);
			});
			return;
		}
		// Check if the clicked element is an IMG.
		if (event.target.tagName === "IMG" && event.target.classList.contains("magnifiable")) {
			// Construct a magnified view of the image by opening the image SRC in a modal div.
			let modal = document.createElement("div");

			modal.id = "image-container-modal";
			// Place image inside the modal.
			let img = document.createElement("img");
			img.src = event.target.src;

			img.id = "modal-image";
			modal.appendChild(img);

			// Add an X to close the modal.
			let closeButton = document.createElement("div");
			closeButton.innerHTML = "&times;";

			closeButton.className = "modal-close-button";
			modal.appendChild(closeButton);

			closeButton.addEventListener("click", function () {
				modal.remove();
				window.document.body.style.overflow = "auto";
			});

			let closeImgModal = function (e) {
				if (e.target === modal) {
					modal.remove();
					window.document.body.style.overflow = "auto";
				}
			}

			// Close the modal when clicking outside the image.
			modal.addEventListener("click", closeImgModal);
			document.addEventListener("touchend", closeImgModal);
			window.document.body.style.overflow = "hidden";
			document.body.appendChild(modal);
		}
		if (event.target.tagName === "IMG" && event.target.parentElement.classList.contains("headshot") && !event.target.parentElement.parentElement.classList.contains("headshot-overlay-active")) {
			// Support machines like phones that do not have hover
			const headshot = event.target.parentElement;
			const castPerson = headshot.parentElement;
			castPerson.classList.add("headshot-overlay-active");
			let closeButton = document.createElement("div");
			// closeButton.innerHTML = "📌";

			closeButton.className = "modal-close-button";
			headshot.appendChild(closeButton);

			closeModals(closeButton, castPerson, event, false);


		}
}

setupIndexBackgroundVideo();
document.addEventListener("click", setupImageClickEffects);
document.addEventListener("touchend", setupImageClickEffects);
