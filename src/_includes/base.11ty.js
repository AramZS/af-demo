const metadata = require("../_data/metadata.js");
// const site = require("../_data/site.js");
const meta = require("./partials/meta.11ty");
const nav = require("./partials/nav.11ty");
const footer = require("./partials/footer.11ty");

module.exports = async function (data, zones) {

	let meta_description = data?.description || data.site?.description || "";
	let metaChunk = meta(
		data,
		`${data.site.title}`,
		meta_description,
		data?.tags ? data.tags : [],
		data?.featuredImage
			? [`${process.env.DOMAIN}/img/${data.featuredImage}`]
			: []
	);
	let templateStyle = "";
	if (zones.template) {
		templateStyle = `<link rel="stylesheet" href="/assets/css/template-${zones.template}.css">`;
	}
	// console.log("canonical", zones.canonical);
	let canonical = zones?.canonical
		? zones.canonical
		: `${process.env.DOMAIN}${data.page.url}`;

	return /*html*/ `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1">
		<title>${data.title || data.site.title}</title>
		<meta name="description" content="${meta_description}" />
		${metaChunk}

		${zones.earlyHead || ""}
		<link rel="stylesheet" href="/assets/css/style.css"  hx-preserve="true">

		<script src="/assets/js/script.js" defer type="application/javascript" hx-preserve="true"></script>

		<script src="https://unpkg.com/scrollama" async type="application/javascript" hx-preserve="true"></script>
		<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" hx-preserve="true" rel="stylesheet">
		<!-- Favicon Meta -->
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
		<link  hx-preserve="true" rel="manifest" href="/site.webmanifest">
		<meta name="msapplication-TileColor" content="#1f1836">
		<meta name="theme-color" content="#1f1836">

		<link rel="canonical" href="${canonical}" />
		${templateStyle}
		${zones.lateHead || ""}

	</head>
<body>
<div class="bg"></div>

<div class="page">
  ${nav(data) || ""}
  ${zones.content}
  ${footer(data) || ""}
</div>

		${zones.endOfBody || ""}
	</body>
</html>`;
};
