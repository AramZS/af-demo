const base = require("./base.11ty");
module.exports = async function (data) {
	// console.log("layout data", data);
	let meta_description = data?.description || data.site?.description || "";
	let insert = {
		template: "index",
		content: /*html*/ `
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

  </section>
`,
	};
	return base(data, insert);
};
