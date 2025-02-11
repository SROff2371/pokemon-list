document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/pokemons');
    const pokemonList = await response.json();
    const pokemonListContainer = document.getElementById('pokemon-list');

    pokemonList.forEach(pokemon => {
        const pokemonItem = document.createElement('div');
        pokemonItem.classList.add('pokemon-item');
        pokemonItem.innerHTML = `
            <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
        `;
        pokemonListContainer.appendChild(pokemonItem);
    });
});
