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

window.setTheme = function (themeName) {
	console.log("setTheme", themeName);
	localStorage.setItem("theme", themeName);
	document.documentElement.className = "theme-" + themeName;

	let current = document.querySelector(".theme-selector li.current");
	if (!current) {
		return;
	}
	console.log("Removing current theme class from", current);
	current.classList.remove("current");

	current = document.querySelector(
		".theme-selector li." + "theme-" + themeName
	);
	if (!current) {
		return;
	}
	console.log("Adding current theme class to", current);
	current.classList.add("current");
}

// When document ready add event listeners
document.addEventListener("DOMContentLoaded", function () {
	const selectTheme = (e) => {
		const btn = e.currentTarget;
		if (!btn.dataset.theme) {
			return;
		}
		console.log('Theme button clicked', btn.dataset.theme);
		window.setTheme(btn.dataset.theme);
	};

	Array.from(document.getElementsByClassName("theme-selector-btn")).forEach(
		(el) => {
			el.addEventListener("click", selectTheme);
		}
	);

	window.setTheme(localStorage.getItem("theme") || "one");
});
