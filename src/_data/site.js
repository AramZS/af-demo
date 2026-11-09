require("dotenv").config();

let randomVer = () => {
	// eslint-disable-next-line no-bitwise
	const segment = () =>
		(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

	return `${segment()}-${segment()}-${segment()}`;
};

let data = {
	language: "en-US",
	lang: "en-US",
	github: {
		build_revision: process.env.MY_GITHUB_RUN_ID || 1.0,
		build_sha: process.env.GITHUB_SHA || 1,
	},
	domain: process.env.DOMAIN,
	serviceWorkerVer: `${randomVer()}-${Date.now()}`,
};


module.exports = (info) => {
	console.log("final site info", data);
	return data;
};
