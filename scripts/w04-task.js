/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Fabian Betancourt",
    photo: "images/profile.jpeg",
    favoriteFoods: [
        "Hamburger",
        "Sushi",
        "Pizzanesa",
        "Lasagna"
    ],
    hobbies: [
        "Traveling",
        "Swimming",
        "Playing soccer",
        "Go to the movies"
    ],
    placesLived: [

    ],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Valera, Trujillo, Venezuela",
        length: "16 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Rosario, Santa Fe, Argentina",
        length: "2 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Bucaramanga, Santander, Colombia",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => 
    {let li = document.createElement("li"); 
    li.textContent = food; document.querySelector("#favorite-foods").appendChild(li);});

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => 
    {let ul = document.createElement("ul"); 
    ul.textContent = hobbie; document.querySelector("#hobbies").appendChild(ul);});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => 
    {let term = document.createElement("dt");
    term.textContent = place.place;

    let definition = document.createElement("dd");
    definition.textContent = place.length;

    document.querySelector("#places-lived").appendChild(term);
    document.querySelector("#places-lived").appendChild(definition);
});
