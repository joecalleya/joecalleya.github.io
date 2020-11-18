"use strict";

var scrollableContainer = document.querySelector('#scrollable');
var scrollRightButton = document.querySelector('#scroll__right__button');
var scrollLeftButton = document.querySelector('#scroll__left__button');
scrollRightButton.addEventListener('click', function (event) {
  scrollableContainer.scrollLeft += 225;
});
scrollLeftButton.addEventListener('click', function (event) {
  scrollableContainer.scrollLeft -= 225;
}); // create project info using array of item

var projectItemsArray = [{
  name: "No1 South East",
  description: "Client Project: A Web App featuring Local deals and discounts",
  techStack: "React",
  gitHubLink: "https://github.com/nology-tech/no1-south-east",
  webLink: "https://www.no1southeast.co.uk/",
  image: "images/no1southeast.png"
}, {
  name: "FIRE Calculator",
  description: "Financial Independence Retire Early Calculator; how long until you can retire",
  techStack: "Javascript - HTML - CSS",
  gitHubLink: "https://github.com/joecalleya/fire-calculator",
  webLink: "https://joecalleya.github.io/fire-calculator/",
  image: "images/fireCalculator.png"
}, {
  name: "HTML Cat Game",
  description: "Http Cats Meme - Pair Matching Game",
  techStack: "HTML - CSS - Javascript",
  gitHubLink: "https://github.com/joecalleya/html-cats-game",
  webLink: "https://joecalleya.github.io/html-cats-game/",
  image: "images/catgame.png"
}, {
  name: "Morse Translator",
  description: "Morse Code Translator, enter text to translate to Morse ",
  techStack: "Javascript - CSS - HTML",
  gitHubLink: "https://github.com/joecalleya/morse-translator",
  webLink: "https://joecalleya.github.io/morse-translator/",
  image: "images/morsecode.png"
}, {
  name: "CockTail Recipie App",
  description: "Using the Cocktail Recipe API, has ability to Authenticate, Search, filter & Save drinks.",
  techStack: "React - Firebase - Javascript - HTML - CSS",
  gitHubLink: "https://github.com/joecalleya/cocktail-api-app",
  webLink: "https://cocktail-api-app.firebaseapp.com/",
  image: "images/Cocktail-app.png"
}, {
  name: "Random Recipie App",
  description: "This App links to the Meal DB API, has ability to Authenticate & Save drinks to the user account",
  techStack: "React - Firebase - Javascript - HTML - CSS",
  gitHubLink: "https://github.com/joecalleya/recipie-finder-app<",
  webLink: "https://random-recipie.firebaseapp.com/",
  image: "/images/random-recipie.png"
}, {
  name: "( WORK IN PROGRESS) Outdoor Climbing Crag App ",
  description: "Under Construction - will be a NODE API back end & separate front end for showing, updating and deleting climbing locations",
  techStack: "NODE.js - HTML GET/POST etc - React - Firebase - Javascript - HTML - CSS",
  gitHubLink: "https://github.com/joecalleya/climbing-spot-node-api",
  webLink: "",
  image: "/images/under-construction.png"
}];

var createHTML = function createHTML(webLink, name, description, image, gitHubLink, techStack) {
  var projectElementSelection = document.querySelector('.projects__container');
  projectElementSelection.innerHTML += "<div class=\"project__detail\">\n                                            <a href=".concat(webLink, ">\n                                                <img class=\"project__detail__image\" src=").concat(image, " alt=\"").concat(name, "\">\n                                            </a>\n                                            <h1>").concat(name, "</h1>\n                                            <p class=\"project__text\">").concat(description, "</p>\n                                            <a href=").concat(gitHubLink, " target=\"_blank\" rel=\"noopener noreferrer\">\n                                            <i class=\"fab fa-github-square\"></i>\n                                            <p> ").concat(techStack, "</p>\n\n                                        </a>\n                                        </div> ");
};

projectItemsArray.map(function (item) {
  createHTML(item.webLink, item.name, item.description, item.image, item.gitHubLink, item.techStack);
});