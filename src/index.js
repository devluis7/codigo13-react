import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
// Al importar el archivo index.css en index.js
// esto esta haciendo un import global, es decir 
// lo puedo usar desde cualquier archivo del proyecto

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Para poder importar un componente debo de llamarlo por el nombre que fue exportado
import PrimerComponente from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Para usar un componente debo tratarlo como si fuera una etiqueta HTML*/}
    <PrimerComponente/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
