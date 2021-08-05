let pokedexList = document.getElementById('pokemon');
let modalBtn = document.getElementById('modal-btn');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-btn');

const allPokemonURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

const gottaCatchEmAll = () => {
  fetch(allPokemonURL)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`
      }));
      appendPokemon(pokemon);
    });
};

const appendPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) =>
        `<ul><li id="${pokeman.id}" onclick="clickPokemon(${pokeman.id})"><img src="${pokeman.image}"/> <h2>${pokeman.id}. ${pokeman.name}</h2> </a> </li></ul>`
    )
    .join('');
  pokedexList.innerHTML = pokemonHTMLString;
};

const clickPokemon = (pokemonId) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const pokemonCard = data.map((attribute) => {
        ``;
      });
    });
};

gottaCatchEmAll();
