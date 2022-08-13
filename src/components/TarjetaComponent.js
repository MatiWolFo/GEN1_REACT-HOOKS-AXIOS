//1a. IMPORT REACT LIBRARY
import React from 'react';

//5. ARROW FUNCTION DE TODO COMPONENTE
// UN COMPONENTE ES UN EXTRACTO DE UN HTML ENTERO
// EL NOMBRE DEL COMPONENTE TOMA EL LUGAR DE TODO EL CODIGO
//11. LLAMAR A LAS CONSTANTES USUARIOS MEDIANTE SU PROPIEDAD
//21. LLAMAR A LA FUNCION DESDE EL COMPONENTE ({}) => { PARA EJECUTARLA AL onClick CORRESPONDIENTE
const TarjetaComponent = ({ usuario, tarjetaDelete, setUsuarioEditado }) => {
    return (
        <div className="card">
            <div className="card-body">
                {/* 12. SE RETORNAN LOS VALORES ATRAPADOS EN CADA ITERACION DEL usuarios.map */}
                <h3
                    className="card-title">{usuario.nombre} {usuario.apellido}</h3>
                <p className="edad">{usuario.edad}</p>
                <br />
                <div className="d-flex justify-content-center">
                    {/* 39. AL onClick, LLAMAR Y EFECUTAR LA FUNCION setUsuarioEditado, VA A ENTREGAR EL USUARIO DESTINO A EDITAR */}
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setUsuarioEditado(usuario)}>EDITAR</button>
                    {/* 22. AL onClick, LLAMAR Y EJECUTAR LA FUNCION tarjetaDelete SEGUN LA KEY O ID usuario.key*/}
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => tarjetaDelete(usuario.key)}>BORRAR</button>
                </div>
            </div>
        </div>
    )
}

//61. CREAR COMPONENTE TARJETA PARA RECIBIR DATOS DE AUTOS, DE EJERCICIO E IMPORTAR PROPS
const TarjetaAuto = ({ auto, tarjetaDelete, setAutoEditado }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3
                    className="card-title">{auto.marca} {auto.modelo}</h3>
                <p className="velocidad">{auto.velocidad}</p>
                <br />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setAutoEditado(auto)}>EDITAR</button>
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => tarjetaDelete(auto.id)}>BORRAR</button>
                </div>
            </div>
        </div>
    )
}
export {TarjetaComponent, TarjetaAuto};