/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Fabian Betancourt";
let currentYear = new Date().getFullYear();
let profilePicture = "images/Foto.jpeg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = "<strong>" + fullName + "</strong>";
// nameElement.innerHTML = '<strong>${fullName}</strong>';  // I did not understand why it did not work using this
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

let favFood = ["Hamburger", "Sushi", "Pizzanesa", "Lasagna"];
foodElement.innerHTML = favFood;
favFood.push("Pasta");
foodElement.innerHTML += "<br>" + favFood;
// foodElement.innerHTML += `<br>&{favFood}`; it did not work using this code
favFood.shift();
foodElement.innerHTML += "<br>" + favFood;
favFood.pop();
foodElement.innerHTML += "<br>" + favFood;




