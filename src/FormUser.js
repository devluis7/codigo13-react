import {useState} from "react";


const FormUser = () => {
    return (
        <div>
            <form action="">
                <h4>Formulario de Usuario</h4>
                <p>
                    <input 
                        type="text" 
                        placeholder="Ingrese su Nombre">
                    </input></p>
                    <p>

                    <input 
                        type="text" 
                        placeholder="Ingrese su Apellido">
                    </input></p>
                <p><input type="email" placeholder="Ingrese su email"></input></p>
                <p><input type="password" placeholder="Ingrese su password"></input></p>
                <p><button type="submit">Registrar</button></p>
            </form>
        </div>

    );
};

export default FormUser;