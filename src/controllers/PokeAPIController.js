/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import shuffle from 'shuffle-array';

class PokeAPIController {
  async index(req, res) {
    const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150');
    return res.json(pokemons.data.results.map((poke) => poke.name));
    // return pokemons.data.results.map((poke) => poke.name);
  }

  async moves(req, res) {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemon}`);
    shuffle(pokemon.data.moves);
    const move = pokemon.data.moves.map((moves) => moves.move.name).slice(0, 4);

    return res.json(move);
  }
}

export default new PokeAPIController();
