let pokedexList = document.getElementById('pokemon');
let modalBtn = document.getElementById('modal-btn');
let modal = document.getElementById('modal');
let closeBtn = document.querySelector('.close-btn');
let pokeCard = document.querySelector('.pokeCard');
let modalContent = document.querySelector('#modalContent');


const gottaCatchEmAll = async () => {
  const allPokemonURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const res = await fetch(allPokemonURL);
  const data = await res.json();
  const pokemon = data.results.map((data, index) => ({
    name: data.name,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`
  }));
  appendPokemon(pokemon);
};

const appendPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) =>
        `<ul><li id="${pokeman.id}" class='pokeModal' onclick="clickPokemon(${pokeman.id})"><img src="${pokeman.image}"/> <h2>${pokeman.id}. ${pokeman.name}</h2> </a> </li></ul>`
    )
    .join('');
  pokedexList.innerHTML = pokemonHTMLString;
};

const clickPokemon = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const res = await fetch(url);
  const object = await res.json();
  activateModalCard(object);
  console.log('object', object);
};

const activateModalCard = (pokemon) => {
  modal.style.display = 'block';

  console.log(modal);

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });
console.log(pokemon, 'pokemon')
const pokemonDetails = `<ul>
  <li class='pokeCard'>
    <img src="${pokemon.sprites.front_default}"/>
    <h2>${pokemon.id}. ${pokemon.name}</h2>
  </li>
</ul>`
modalContent.innerHTML = pokemonDetails;
};

gottaCatchEmAll();
