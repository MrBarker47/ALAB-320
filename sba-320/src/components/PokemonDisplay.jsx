import axios from 'axios'
import {useState, useEffect} from 'react'



export default function App() {
    //Pokemon API
    const apiURL = "https://pokeapi.co/api/v2/pokemon/charizard";

    const [data, setData] = useState();
    const [name, setName] = useState();

    useEffect(() => {
        axios.get(apiURL).then((response) => {
         
            setData(response.data);
            setName(response.data.name)
        }).catch((err) => {
            windows.alert(err);
        })
    })

     return(
        <div>
            <h2>{name}</h2>
            <input type="text" placeholder='type here..'/>
            <input type="submit" />
            <img src={data.sprites.other.dream_world.front_default} alt='pokemon' />
            
        </div>
     );
}


