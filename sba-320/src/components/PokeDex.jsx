import {useState, useEffect} from "react"

export default function Pokedex(props) {
    const [PokedexData, setPokedex] = useState({
      searchterm: ""  
    });

    const handleChange = (event) => {
        setPokedex({ ...PokedexData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.pokemonsearch(PokedexData.searchterm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="searchterm"
                onChange={handleChange}
                value={PokedexData.searchterm}
                />
            </form>
        </div>
    );
}