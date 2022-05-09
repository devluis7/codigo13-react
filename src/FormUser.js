import {useState} from "react";


const FormUser = () => {
    // La otra forma en la cual podemos guardar los datos de los inputs
    // es un objeto para ello necesitamos que los inputs tengan un name
    // para que los names srivan como un key el valor sea lo que se obtenga
    // de los inputs

    // ahora debemos crear una variable que tenga por default un objeto con los 
    // keys(name's) pero que los values esten vacios

    const [valorDeInputs,setValorInputs] = useState(
        {
            nombre: "",
            apellido: "",
            correo: "",
            password: "",
        }
    );
    
    //ahora debemos de construir una función que se encargue de almacenar los valores
    // de los inputs en el objeto

    const handleInputValues = (e) => {
        // debemos extraer dos cosas de event
        // 1 el name de cada input
        // 2 el value de cada input
        // name = e.target.name
        //value = e.target.value
        const {name, value} = e.target;
        // ...valorDeInputs: es para hacer una copia del objeto actual y ademas estamos
        // agregando el nuevo key y value que recibimos
        // [name] recuerden que name es una variable por ende para poder usarla como key
        // denemos colocarlas entre []
        // value: el valor que estamos recibiendo nuestro input
        setValorInputs({
            ...valorDeInputs,
            [name]: value,
        });
    };

    return (
        <div>
            <form action="">
                {/*En react la forma en la cual damos una clase es usando el ClassName 
                */}
                <h4 className="title">Formulario de Usuario</h4>
                <h5>Nombre {valorDeInputs.nombre}</h5>
                <h5>apellido {valorDeInputs.apellido}</h5>
                <h5>correo {valorDeInputs.correo}</h5>
                <h5>password {valorDeInputs.password}</h5>
                <p>
                    <input 
                        type="text"
                        onChange={handleInputValues}                     
                        name = "nombre"
                        placeholder="Ingrese su Nombre"
                    />
                </p>
                    <p>
                        <input 
                            type="text" 
                            onChange={handleInputValues}     
                            name = "apellido"
                            placeholder="Ingrese su Apellido"
                        />
                    </p>
                <p>
                    <input 
                        type="email" 
                        onChange={handleInputValues}     
                        name = "correo" 
                        placeholder="Ingrese su email"
                    />
                </p>
                <p>
                    <input 
                        type="password"  
                        onChange={handleInputValues}     
                        name = "password" 
                        placeholder="Ingrese su password"
                    />
                </p>
                <p>
                    <button type="submit">Registrar
                    </button>
                </p>
            </form>
        </div>

    );
};

export default FormUser;