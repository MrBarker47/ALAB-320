import {useState, useEffect} from 'react'

import PokemonDisplay from './components/PokemonDisplay';
import Pokedex from './components/PokeDex';

export default function App() {
    //Pokemon API
    const apiURL = "https://pokeapi.co/api/v2/pokemon";

    //State to hold pokemon data
    const [pokemon, setPokemon] = useState(null);
    //Making a function to get the pokemon 
    const getPokemon = async(searchTerm) => {
    //Fetching the api request
    const response = await fetch(apiURL); {
        console.log("it connects with api");
    }
    
    // Parse JSON response into a Javascript Object
    const data = await response.json() 
      setPokemon(data);
    };

        


      useEffect(() => {
        getPokemon("Pikachu")
      }, []);
        return(
        <div>
        <PokemonDisplay pokemonsearch={getPokemon} />
        <Pokedex pokemon={pokemon} />
        </div>
        );
}


const getPokemon = async(searchTerm) => {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setPokemon(data);
    } catch(e) {
        console.error(e) 
    }
}



/*
      .then(response => console.log(response))
        .catch(error => console.log(error))

*/