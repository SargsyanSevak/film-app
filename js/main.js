"use strict";
const headerImage = document.querySelector("header img");
const adv = document.querySelectorAll("#main_promo .mp");
const pageTitle = document.querySelector("title");
const films = document.querySelector("#films");

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde", "Reservoir Dogs", "Doctor Zhivago",
		"The Deer Hunter", "Rocky", "Crid"
	]
}
_DB.movies.sort();

headerImage.src = "img/bg2.jpg";
headerImage.alt = "Hitman's Wife's Bodyguard";
adv.forEach(adv => adv.remove());
pageTitle.textContent = headerImage.alt;

_DB.movies.forEach((film, index) => {
	films.innerHTML += `
		<p>
			${index + 1}. ${film} <span data-rm>&#128465;</span>
		</p>
	`;
});

// document.querySelectorAll("[data-rm]").forEach(trash =>{
// 	trash.addEventListener("click",(e) => {
// 		e.target.parentElement.remove()
// 	})
// });

const block = document.querySelector("#main_promo")
const input = document.querySelector("#add input");

block.innerHTML = "<h1 id=\"title\"></h1>";
const ___title = document.querySelector("#title");

input.addEventListener("click",(e) => {
	___title.textContent = e.target.value
})