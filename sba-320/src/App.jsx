import {useState, useEffect} from 'react'


export default function App() {
    
      const [pokemon, setPokemon] = useState(null);

      //Making a function to get the pokemon 
      const getPokemon = async(searchTerm) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
      };

      useEffect(() => {
        getPokemon("Pikachu")
      }, []);


    return(
        <div>
        <h1 className='pokemon'>Pokedex</h1>
        </div>
    )

}


const getPokemon = async(searchTerm) => {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/pikachu`
        );
        const data = await response.json();
        setPokemon(data);
    } catch(e) {
        console.error(e) 
    }
}