require("dotenv").config();

let data = {
	username: "Alfalfa", // No leading @ here
	corpName: "Alfalfa the Movie",
	homeLabel: "Alfalfa Film",
	url: "https://alfalfathemovie.com",
	homeUrl: "https://alfalfathemovie.com/",
	language: "en-US",
	title: "Alfalfa - an eco-noir film",
	description: "A weekend heat wave. A town facing a water crisis. Sprinkler man Lance\'s life reaches a tipping point when he is offered a lucrative, but ethically questionable, job growing alfalfa on parched desert land.",
	myRels: [
		{ href: "https://www.instagram.com/alfalfamovie/", title: "Instagram" },	
	],
	defaultSocialImage: "assets/imgs/default-social-image.png"
};


module.exports = data;
