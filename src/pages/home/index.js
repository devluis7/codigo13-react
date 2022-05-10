// En material existe un tag llamado container
import { useEffect, useState} from "react";
import { Container } from "@mui/material";
import { getDataFromPokemon } from "../../service";
// vamos a ver como podemos ejecutar la función que se encarga de traer a los
// pokemones

const Home = () => {
    // vamos a crear una variable la cual se encarga de guardar la lista de pokemones

    const [pokemons, setPokemon] = useState([]);

    // debemos crar una funcion la cual se encargue de ejecutar a getDataFromPokemon y 
    // la data que retorne esa función guardarla usando setPokemon
    const fetchPokemonList = async () =>{ 
        const listPokemones = await getDataFromPokemon();
        // ahora como ya recuperamos la lista de los pokemones hay que usar
        // la función setPokemon para poder guardar esa lista en pokemones
        console.log ("listPokemons.results",listPokemones.results);
        setPokemon (listPokemones.results);
    };
    
    // en react exite una función llamada useEffect la cual se ejecuta cuando la pag.
    // esta iniciando, vamos a usar useEffect si quieres ejecutar algo al inicio de la aplicación.
    // La estructura de useEffect es la siguiente:

    useEffect( () => {
        // aca llamamos a la función que queremos ejecutar
        fetchPokemonList();
        //!IMPORTANTE por ahora en los useEffect debemos de colocar un array bacio
        //! esto se hace para evitar un bucle infinito, si no colocamos el array vacio
        //! la función que esta dentro del useEffect se llamada n veces en forma infinita

    },[]);

    return (
        <Container>
            <h1>
                Pokedex
            </h1>
        </Container>
    );
};

export default Home;

