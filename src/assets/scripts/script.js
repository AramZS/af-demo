console.log("script loaded");

// Photoshow arrows are <label for="radio-N"> tied to visually-hidden radios.
// Native label activation focuses the hidden radio, and the browser scrolls it
// into view, jumping the page above the images. Switch the slide ourselves and
// focus without scrolling.
function setupPhotoshowNavScrollFix() {
	document.addEventListener("click", function (event) {
		const label = event.target.closest("label[for]");
		if (!label || !label.closest(".photoset.photoshow")) {
			return;
		}
		const input = document.getElementById(label.getAttribute("for"));
		if (!input) {
			return;
		}
		event.preventDefault();
		input.checked = true;
		input.focus({ preventScroll: true });
	});
}

setupPhotoshowNavScrollFix();
