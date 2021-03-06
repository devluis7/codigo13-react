// En material existe un tag llamado container
import { useEffect, useState} from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getDataFromPokemon } from "../../service";
// vamos a ver como podemos ejecutar la función que se encarga de traer a los
// pokemones

const Home = () => {
    const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";


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

    }, []);

    return (
        <Container>
            <h1>Pokedex</h1>
            {/* es bueno validar que el array este lleno para que recien ejecute el map */}
            {/* && estamos simulando un if  */}
            {/* if (pokemons.lenght > 0) {
                "lleno"
            } */}
            {/* pokemons.lenght > 0 && "leno" */}
            {/* pokemons.lenght > 0 ? "lleno" : "vacio" */}
    
            {/*  Operador ternario => if {} else {}  */}
            {/* {pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
                // aca el codigo visual
                <p>{pokemon.name}</p>
            ))
            ) : (
            <h4>No hay datos</h4>
            )} */}
            
            <Grid container spacing={3} >
                {pokemons.length > 0 &&
                pokemons.map((pokemon,index) => (
                    // aca el codigo visual
                    
                    <Grid item md = {6} lg= {4} sm = {12} xs = {12}>
                        <Card sx={{ width:300 }}>
                            <CardMedia 
                                component="img" 
                                image={`${imgUrl}${index + 1}.svg`} 
                            />
                            <CardContent>
                                <h3>{pokemon.name}</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                 ))}
            </Grid>
      </Container>
    );
};

export default Home;

