require("dotenv").config();

let data = {
	username: "Alfalfa", // No leading @ here
	homeLabel: "Alfalfa Film",
	homeUrl: "https://alfalfafilm.com/",
	language: "en-US",
	title: "Alfalfa - an eco-noir film",
	description: "A weekend heat wave. A town facing a water crisis. Sprinkler man Lance’s life reaches a tipping point when he is offered a lucrative, but ethically questionable, job growing alfalfa on parched desert land.",
	myRels: [
		{ href: "https://www.instagram.com/alfalfamovie/", title: "Instagram" },	
	],
};


module.exports = data;
