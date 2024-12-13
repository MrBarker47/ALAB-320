import {useState, useEffect} from 'react'



export default function App() {
    const apiURL = "`https://pokeapi.co/api/v2/pokemon"



      const [pokemon, setPokemon] = useState(null);

      //Making a function to get the pokemon 
      const getPokemon = async(searchTerm) => {
        const response = await fetch(apiURL)
        .then(response => console.log(response))
        .catch(error => console.log(error))
      };

      useEffect(() => {
        getPokemon("Pikachu")
      }, []);


    return(
        <div>
        <h1 className='pokemon'>Pokedex</h1>
        <input className='input' placeholder='type here...'></input>
        </div>
    )

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