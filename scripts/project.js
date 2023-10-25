const pageTitle = document.querySelector("#title");
pageTitle.innerHTML = "Pokemon List"

let pokemons=[" Charmander"," Bulbasaur"," Squirtle"," Chikorita"," Cyndaquil"," Totodile"," Turtwig"," Chimchar"," Piplup"," Pikachu"];
document.querySelector("#pokemonsOptions").innerHTML=pokemons;

conditional = true
if (conditional = true) {
    document.querySelector("#arrayMethod").innerHTML = pokemons.find(pokemon => pokemon.startsWith(" B"));
} else {
    let pokemonDisplay = "No Pokémon found that starts with 'B'";
document.querySelector("#arrayMethod").innerHTML = pokemonDisplay;
}

document.getElementById('search-btn').addEventListener('click', async () => {
    const pokemonName = document.getElementById('pokemon-list').value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    displayProperties(data);
});

function displayProperties(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Id: ${data.id}</p>
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}" width="250" height="250">
    `;
}