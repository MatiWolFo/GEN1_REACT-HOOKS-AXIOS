//1a. IMPORT REACT LIBRARY
//1b. INSTALAR BOOTSTRAP npm install react-bootstrap bootstrap
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//1c. INDEX.JS ESTA VINCULADO A INDEX.HTML, TODO LO QUE SE HAGA EN APP.JS SE REFLEJA ACA, Y EN INDEX
ReactDOM.render(
    //1d. AL IMPORTAR LA APP, POR DEFECTO IMPORTA TODO LO QUE ESA APP TENGA IMPORTADO O EN USO
    <App />,
    document.querySelector("#root")
);
