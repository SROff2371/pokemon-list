const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // Sert les fichiers statiques (HTML, CSS, JS)

let pokemonList = [
    { name: 'Bulbizarre', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { name: 'Salamèche', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { name: 'Carapuce', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' }
];

app.get('/api/pokemons', (req, res) => {
    res.json(pokemonList);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
