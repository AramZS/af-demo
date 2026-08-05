function setupIndexBackgroundVideo() {
	const videoShell = document.querySelector(".index-video-bg");
	if (!videoShell) {
		return;
	}

	const videoMedia = videoShell.querySelector("video");
	let ticking = false;

	const syncVideoState = () => {
		const viewportHeight = window.innerHeight || 1;
		const threshold = viewportHeight * 2.5;
		const progress = Math.min(window.scrollY / threshold, 1);

		videoShell.style.opacity = String(1 - progress);
		videoShell.classList.toggle("is-hidden", progress >= 1);

		if (videoMedia) {
			if (progress >= 1) {
				videoMedia.pause();
			} else if (videoMedia.paused) {
				videoMedia.play().catch(() => {});
			}
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

function setupImageModal() {
	// Listen for every click on an IMG element.
	document.addEventListener("click", function (event) {
		if (window["image-container-modal"]) {
			return;
		}
		// Check if the clicked element is an IMG.
		if (event.target.tagName === "IMG") {
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

			closeButton.id = "modal-close-button";
			modal.appendChild(closeButton);

			closeButton.addEventListener("click", function () {
				modal.remove();
				window.document.body.style.overflow = "auto";
			});

			// Close the modal when clicking outside the image.
			modal.addEventListener("click", function (e) {
				if (e.target === modal) {
					modal.remove();
					window.document.body.style.overflow = "auto";
				}
			});
			window.document.body.style.overflow = "hidden";
			document.body.appendChild(modal);
		}
	});
}

setupIndexBackgroundVideo();
setupImageModal();
