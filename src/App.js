//Paso 1: importar useState
import {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import FormRegister from "./Form";
import FormUser from "./FormUser";


const PrimerComponente = () => {
  // como crar un componente desde 0
  // El primer pso para definir un componente es el nombre
  // El nombre de un componente siempre debe iniciar en mayuscula
  // ahora el componente basicamente es una función, por ende podemos
  // crearlo usando functión o arrow Function

  // Esta función lo que hara sera retornar una vista
  // en react usamos return() para indicar que lo que esta dentro de los
  // parentesis sera el objeto visual que vamos a retornar.
  // algo importante es que react solo puede retornar un componente a la vez
  // retornar solo un div

  const edad = 99;
  //React tiene una función llamada useState
  // useState es una función interna de react la cual se encarga de 
  // manejar el estado de las variables
  // para poder usar useState debemos importarla desde react

  //Al usar useState la forma en la cual creamos una varianle cambia
  //porque debemos definir dos cosas, primero el nombre de la variable y segundo
  //la función que se va a encargar de cambiar el estado de la variable

  //count: es la variable que usaremos para poder mostrar el valor
  //setCount: es la función que se encarga de poder adignarle un valor a count
  //para poder definir esta variable como parte de useState debemos inicializar el 
  //valor de esta variable usando useState
  //ojo el valor va dentro de useState sera el valor inicial de la variable

  const [count,setCount]= useState(0); //ESTO SE CONSIDERA UN HOOK
  //vamos a crear dos funciones  una para sumar y otra para restar
  //estas dos funciones esta cambiando el estado de la variable count
  const sumar = () => { setCount (count + 1)};

  const restar =() => { setCount (count - 1)};

  const parametros = (n1, n2) =>{
    setCount(n1 + n2);
  };
  
  return (
    <div>

      <Header />

        {/*<h1>Hola mundo</h1>*/}
      <div>
        {/*
        <h4>Hola desde el componente {count}</h4>
        <h5>Empezo lo bueno</h5>
         vamos a crear dos botones, uno para poder sumarle 1 a count y otro para restarle */}
        {/* 
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        */}
        {/*Si queremos usar parentesis al momento de llamar a una función debemos primero
        ejecutarla como un callback */}
        {/*Ademas es la forma en el caso nustro reciba algun parametro 

        <button onClick={() => parametros(10,20)}>Restar</button> 
        */}
      </div>
      <hr />
      {/*<FormRegister /> */}  
      <FormUser />
      <Footer />
      </div>
  );
  };
  
  // Luego de crear el componente debemos de exportarlo
  // Esto es como decir que este archivo unicamente esta exportando este componente
  
  export default PrimerComponente;