const base = require("./base.11ty");
module.exports = async function (data) {
	// console.log("layout data", data);
	let meta_description = data?.description || data.site?.description || "";
	const allCollections = data.collections || {};
	const allMarkdownPages = allCollections.allMarkdownPages;
	console.log("index template collections", Object.keys(allCollections), "rendered markdown pages", allMarkdownPages.length);
	allMarkdownPages.forEach((page) => {
		console.log("page", page);
	});
	let renderingQueue = Object.values(data.site.nav);
	let renderPromises = {};
	for (const item of renderingQueue) {
		let page = allMarkdownPages.find((page) => page.idSlug === item);
		if (!page) {
			console.warn("No page found for nav item", item);
			continue;
		}
		console.log("Rendering index block page", page.idSlug, "for nav item", item);
		
		renderPromises[item] = this.renderTemplate(await this.renderTransforms(page.rawInput));
	}
	let awaitedRenderGroup = {};
	for (const [key, promise] of Object.entries(renderPromises)) {
		awaitedRenderGroup[key] = await promise;
	}
	let renderedGroup = Object.entries(awaitedRenderGroup).map(([key, content]) => `<section class="page" id="${key}">${content}</section> <hr class="section-separator" />`).join('\n\n');
	let insert = {
		template: "index",
		content: /*html*/ `
	<div class="index-video-bg" aria-hidden="true">
		<video class="index-video-bg__media" muted loop playsinline autoplay="autoplay" preload="auto" poster="/assets/imgs/split-img.jpg">
			<source src="/assets/Rev-Yearwood-5-26-26-small.webm" type="video/webm">
		</video>
	</div>
	<div class="home">
		<section class="hero scroll-hint-container">
			<div class="scroll-hint">
				<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
				Scroll down
			</div>
		</section>
		<section class="hero">
			<!--  <p class="sub-title">SUBTITLE</p>  
			<a href="#" class="btn">SOME BUTTON</a> -->
			<p class="left">where water is most scarce....</p>
		</section>
		<section class="hero">
			<p class="right">America grows its thirstiest crop</p>
		</section>
		<section class="hero title-section">
			<h1 class="center">ALFALFA</h1>
			<h3 class="center">An eco-noir by Jack Fessenden</h3>
		</section>
	</div>
  <section class="pages-container">
  	${renderedGroup}
  </section>
  <script src="/assets/scripts/page.js"></script>
`,
	};
	return base(data, insert);
};
