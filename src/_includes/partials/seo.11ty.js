const JSONLDHeader = require("./json-ld-header.11ty.js");
function seoDefaulter(page, siteData){

	const seoDataExtracted = { ...siteData, ...siteData.metadata, ...page };
	seoDataExtracted.page = seoDataExtracted.page || {};
	seoDataExtracted.page.date = new Date();
	seoDataExtracted.cover_image = seoDataExtracted.cover_image || siteData.metadata.defaultSocialImage;
	return seoDataExtracted;
}

module.exports = async function(data, zones) {
  // console.log("layout data", data);
  let seoObject = seoDefaulter(data.page, data.site);
  let me = data.me;

  const {
    title,
    metadata,
    description,
    cite,
    page,
    linkInternal,
    canonical,
    isBasedOn,
    mediaType,
    first_air_date,
    release_date,
    tags,
    ogImageHref,
    cover_image,
    contentType,
  } = seoObject;

  const mainPageUrl = `${metadata?.url || ""}${page?.url || ""}`;

  // Calculate Open Graph Typewashing
  let ogtype = data.ogtype || "website";
  if (mediaType === "film") {
    ogtype = "video.movie";
  } else if (mediaType === "tv") {
    ogtype = "video.tv_show";
  } else if (mediaType === "film" || mediaType === "tv") {
    ogtype = "video";
  }

  // Calculate final social image
  let finalSocialImage = "";
  if (ogImageHref) {
    finalSocialImage = ogImageHref;
  } else if (cover_image) {
    finalSocialImage = `${metadata?.url}/img/posts/${cover_image}`;
  } else {
    finalSocialImage = `${metadata?.url}/${metadata?.defaultSocialImage}`;
  }

  // Article-specific meta tags
  const articleMeta = ogtype === "article" ? `

      ${page?.date ? `<meta name="article:published_time" content="${page.date.toISOString()}" />` : ""}
      <meta name="article:author" content="${me?.name}" />

      ${cite?.author ? `<meta name="article:author" content="${cite.author}" />` : ""}

      <!-- <meta name="article:modified_time" content=""/> -->
      <!-- <meta name="article:expiration_time" content=""/> -->

      ${contentType ? `<meta name="article:section" content="${contentType}" />` : ""}

      ${tags?.map((tag) => `<meta name="article:tag" content="${tag}" />`).join("\n      ")}
  ` : "";

  return /*html*/ `

      <!-- SEO -->
      <title>${title || metadata?.title}</title>
      <meta name="description" content="${description || metadata?.description}" />
      <meta name="author" content="${me?.name}" rel="me" />
      ${cite?.author ? `<meta name="author" content="${cite.author}" />` : ""}

      ${linkInternal
        ? `<link rel="canonical" href="${mainPageUrl}" />`
        : `<link rel="canonical" href="${canonical || isBasedOn || mainPageUrl}" />`
      }

      ${isBasedOn ? `<meta http-equiv="Link" rel="canonical" content="${isBasedOn}" />` : ""}

      <!-- Open Graph -->
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="${metadata?.title}" />
      <meta property="og:title" content="${title || metadata?.title}" />

      ${linkInternal
        ? `<meta property="og:url" content="${mainPageUrl}" />`
        : `<meta property="og:url" content="${canonical || isBasedOn || mainPageUrl}" />
      <meta property="og:description" content="${description || metadata?.description}" />`
      }

      <!-- mediaType film or tv -->
      ${(mediaType === "film" || mediaType === "tv") ? `
          ${first_air_date ? `<meta property="video:release_date" content="${first_air_date}" />` : ""}
          ${release_date ? `<meta property="video:release_date" content="${release_date}" />` : ""}
          ${mediaType === "tv" ? `<meta property="video:series" content="${title || metadata?.title}" />` : ""}
          ${tags?.map((tag) => `<meta property="video:tag" content="${tag}" />`).join("\n          ")}
      ` : ""}

      <meta property="og:type" content="${ogtype}" />
      <meta property="og:image" content="${finalSocialImage}" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@Chronotope" />
      <meta name="twitter:creator" content="@Chronotope" />
      <meta name="twitter:title" content="${title || metadata?.title}" />
      <!-- Article Specific Meta -->
      ${articleMeta}
	  ${JSONLDHeader(data)}

  `;
};
