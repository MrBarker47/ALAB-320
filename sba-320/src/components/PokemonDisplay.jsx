export default function PokemonDisplay({ pokemon }) {
    const loaded = () => {
        return (
            <>
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.url}</h2>
            </>
        );
    };

    const loading = () => {
        return <h1>No Pokemon To Display</h1>
    };

    return pokemon ? loaded() : loading();
}


