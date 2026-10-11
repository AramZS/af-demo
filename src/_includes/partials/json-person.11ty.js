module.exports = function (data) {
	const me = data?.me || {};

	return {
		"@type": "Person",
		name: me.name || "Jack Fessenden",
		description:
			me.description ||
			"Aram Zucker-Scharff is Software Engineer at The Washington Post, writer, and consultant. Tech solutions for journo problems.",
		disambiguatingDescription: "A media-focused developer and strategist.",
		sameAs: me.sameAs || "https://alfalfathemovie.com",
		image: {
			"@type": "ImageObject",
			url: me.avatar,
		}
	};
};
