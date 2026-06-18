module.exports = function (data, title, description, tagSet, imgUrls) {

	const navItems = data.site.nav;
	let navHtml = "";
	for (const [key, value] of Object.entries(navItems)) {
		navHtml += `<li><a href="/${value}">${key}</a></li>`;
	}
	return /*html*/ `<!-- Nav Block -->
	<nav>
		<!-- <span class="logo">Alfalfa</span> -->
		<ul>
			${navHtml}
		</ul>
	</nav>
	<script type="application/javascript">
		console.log("current path", window.location.pathname);
		if (window.location.pathname !== "/") {
			const navLinks = document.querySelectorAll("nav ul");
			navLinks[0].innerHTML = '<li><a href="/">Home</a></li>' + navLinks[0].innerHTML;
			navLinks[0].querySelectorAll("li").forEach(liItem => {
				const link = liItem.querySelector("a");
				if (link.getAttribute("href") === window.location.pathname) {
					liItem.classList.add("active");
					// .style.display = "none";
					//classList.add("active");
				}
			});
		}
	</script>
`;
}
