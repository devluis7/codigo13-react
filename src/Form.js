import {useState} from "react";



// Esto nos renderizara un formulario de registro
const FormRegister =() => {
    // como podemos capturar el valor de un input
    const [nombre,setNombre] = useState("");

    // en react la forma en la cual obtenemos el valor de un input
    // es usando el onChange este evento nos va a permitir capturar el valor
    // de lo input y guardarlos en una variable

    // Recordemos que con event podemos obtener el valor del input
    // evet = event.target.value

    // vamos a hacer una función la cual cada vez que se ejecute el onChange se llame
    // y se modifique el valor de la variable "nombre"

    //la palabra se usa mucho en React porque recordamos que estamos
    //manejando el estado de la variable
    // recordemos que event es solo un nombre y este puede ser cambiado por "e"
    const handleInputName = (e) =>{
        // que debemos hacwer para poder darle el valor nombre? d
        // recordemos que el valor va dentro de los ()
    setNombre(e.target.value);
};

    return(
        <div>
            <form action="">
                <h4>Formulario de registro</h4>
                <h4>Nombre {nombre}</h4>
                <p>
                    {/* Al ser un input se sobre entiende que el valor que se envia es event
                    por ende no hace falta un parametro*/}
                    <input 
                        type="text" 
                        onChange={handleInputName} 
                        placeholder="Ingrese su Nombre">
                    </input></p>
                    <p>
                    <input 
                        placeholder="Ingrese su Apellido">
                    </input></p>
                <p><input type="email" placeholder="Ingrese su email"></input></p>
                <p><input type="password" placeholder="Ingrese su password"></input></p>
                <p><button type="submit">Registrar</button></p>
            </form>
        </div>
    );
};

export default FormRegister;