/**
 * 
 * Sera nuestro archivo donde vamos a almancear las peticiones
 */

// Una buena practica es tener la URL del api en una variable
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

// podemos crear una funcion generica la cual se encargue de hacer una peticion
// como parametro vamos a recibir la URL que puede ser la que lista ola que nos 
// da el detalle.
// * url sera el parametro que reciba la url hacia donde se hara la petición
//*  url = BASE_URL significa que si url esta vacio, es decir cuando llamemos
//* a la funcion no le pasamos el valor por defecto sera BASE_URL
// url tomara el valor de BASE_URL
//getDataFromPokemon()


// url toma el valor https://link.com
// getDataFromPokemon ("https://link.com")
//async function getDataFromPokemon(url = BASE_URL){
export const getDataFromPokemon = async (url = BASE_URL) =>{
    try{
        // ahora debemos ejecutar el fetch para poder traer la información
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export const storePokemon = async() => {};

//export {getDataFromPokemon};
