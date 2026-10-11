const JSONLDPersonHeader = require("./json-person.11ty.js");

module.exports = function (data) {
	const metadata = data?.metadata || data?.site?.metadata || {};
	const site = data?.site || {};
	const page = data?.page || {};

	const {
		title,
		description,
		linkInternal,
		canonical,
		isBasedOn,
		localBasedOn,
		mediaType,
		first_air_date,
		release_date,
		ogImageHref,
		cover_image,
		cite,
		rating,
		content,
	} = data || {};

	// Calculate Open Graph Typewashing
	let ogtype = data?.ogtype || "website";
	if (mediaType === "film") {
		ogtype = "video.movie";
	} else if (mediaType === "tv") {
		ogtype = "video.tv_show";
	} else if (mediaType === "film" || mediaType === "tv") {
		ogtype = "video";
	}

	const mainPageUrl = `${metadata?.url || ""}${page?.url || ""}`;

	// Calculate final social image
	let finalSocialImage = "";
	if (ogImageHref) {
		finalSocialImage = ogImageHref;
	} else if (cover_image) {
		finalSocialImage = `${metadata?.url}/img/posts/${cover_image}`;
	} else {
		finalSocialImage = `${metadata?.url}/${metadata?.defaultSocialImage}`;
	}

	const stripTags = (str) => String(str || "").replace(/<[^>]*>/g, "");
	const truncate = (str, length = 200, end = "...") =>
		str.length <= length ? str : str.slice(0, length - end.length) + end;

	// Root @type
	let rootType = "WebSite";
	if (ogtype === "article") {
		rootType = "Blog";
	} else if (["video", "video.movie", "video.tv_show"].includes(ogtype)) {
		rootType = "Review";
	}

	// Author / editor pull from the shared person partial via the cascade
	const person = JSONLDPersonHeader(data);
	const author =
		cite && cite.author
			? [person, { "@type": "Person", name: cite.author }]
			: person;

	// itemReviewed @type
	let itemReviewedType = "VideoObject";
	if (ogtype === "video.tv_show") {
		itemReviewedType = "TVSeries";
	} else if (ogtype === "video.movie") {
		itemReviewedType = "Movie";
	}

	const schema = {
		"@context": "http://schema.org",
		"@type": rootType,
		url: linkInternal ? mainPageUrl : canonical || isBasedOn || mainPageUrl,
		headline: title || metadata?.title,
		about: description || metadata?.description,
		image: [finalSocialImage],
		isAccessibleForFree: "True",
		isPartOf: {
			"@type": ["CreativeWork", "Product"],
			name: metadata?.title,
			productID: metadata?.url,
		},
		...(isBasedOn
			? { isBasedOn: `${localBasedOn ? metadata?.url : ""}${isBasedOn}` }
			: {}),
		author,
		editor: person,
		inLanguage: "en-US",
		additionalType: "CreativeWork",
		alternateName: site?.site_name,
		...(rating
			? {
					reviewRating: {
						"@type": "Rating",
						ratingValue: rating,
						worstRating: 1,
						bestRating: 5,
					},
					...(content ? { reviewBody: truncate(stripTags(content), 200) } : {}),
					itemReviewed: {
						"@type": itemReviewedType,
						name: title || metadata?.title,
					},
					...(first_air_date ? { startDate: first_air_date } : {}),
					...(release_date ? { datePublished: release_date } : {}),
			  }
			: {}),
		publisher: {
			"@type": "Organization",
			name: metadata?.corpName || metadata?.username,
			description: metadata?.description,
			sameAs: metadata?.homeUrl,
			logo: {
				"@type": "ImageObject",
				url: `${metadata?.url}/${metadata?.defaultSocialImage}`,
			}
		},
	};

	return /*html*/ `<!-- JSON-LD Header -->
<script type="application/ld+json">
${JSON.stringify(schema, null, 4)}
</script>
`;
};
