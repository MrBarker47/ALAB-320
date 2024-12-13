import axios from 'axios'
import {useState, useEffect} from 'react'



export default function App() {
    //Pokemon API

    const [data, setData] = useState();
    const [name, setName] = useState();

    const apiURL = `https://pokeapi.co/api/v2/pokemon/${data}`;




    const searchPokemon = () => {
        axios.get(apiURL).then((response) => {
         
            setData(response.data);
            setName(response.data.name)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
     
    })

     return(
        <div>
            <h2>{name}</h2>
            <input type="text" placeholder='type here..'/>
            <button onClick={searchPokemon}>Search For The Pokemons</button>
            {/* <img src={data.sprites.other.dream_world.front_default} alt='pokemon' /> */}
            
        </div>
     );
}


