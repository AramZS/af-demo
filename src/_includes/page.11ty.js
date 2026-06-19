const base = require("./base.11ty");
module.exports = async function (data) {
	// console.log("layout data", data);
	let meta_description = data?.description || data.site?.description || "";
	let insert = {
		template: "page",
		content: /*html*/ `
	<section class="page">

		${data.content}

  </section>
  <script src="/assets/scripts/page.js"></script>
`,
	};
	return base(data, insert);
};
