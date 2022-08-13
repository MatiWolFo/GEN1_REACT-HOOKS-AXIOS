import React, { useState, useEffect, useCallback } from 'react';
import { TarjetaAuto } from './TarjetaComponent';
import { FormularioAuto } from './FormularioComponent';
import { useNavigate } from 'react-router-dom';
//74. IMPORTAR LAS FUNCIONES DESDE EL SERVICE
import { getAll, eliminarAuto, saveAuto } from '../services/AutoService';

const initialAuto = [
    {
        id: 1,
        marca: '',
        modelo: '',
        velociad: 0,
        color: '',
        valor: 0
    },
]

const AutoComponent = () => {
    const [autos, setAutos] = useState(initialAuto)
    const [autoEditado, setAutoEditado] = useState(null)

    //75. useEffect NO PUEDE USAR FUNCIONES async. CUANDO SE OBTENGA LA DATA DE LA API, autos SE TIENE QUE ACTUALIZAR CON ESA DATA
    const obtenerAutos = async() => {
        //76. SETEAR initialAuto CON LA INFORMACION DE LA API
        setAutos(await getAll())
    }

    //77. USAR LA CONSTANTE CREADA PARA LLAMAR LA DATA DESDE useEffect, EN ESTE CASO NO NECESITA UN PENDIENTE, QUEDA VACIO []
    useEffect(() => {obtenerAutos()},[])

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/', {replace: true}, [navigate]));

    //79. RECICLAR FUNCION async ELIMINAR PARA SER USADA POR axios
    const tarjetaDelete = async(autoId) => {
        //80a. ESPERA Y ELIMINA PARA POSTERIORMENTE
        await eliminarAuto(autoId)
        //80b. SETEAR LA NUEVA ARRAY Y ACTUALIZARLO EN Db
        setAutos(await getAll())
    }

    //82a. RECICLAR FUNCION async AGREGAR PARA SER USADA POR axios
    const autoAdd = async(auto) => {
        //82b. ESPERA EL onClick PARA AGREGAR, PARA POSTERIORMENTE
        await saveAuto(auto);
        //82c. SETEAR LA NUEVA ARRAY Y ACTUALIZARLO EN Db
        setAutos(await getAll())
    }

    const autoEdit = (autoEditado) => {
        const changeAutos = autos.map(auto => (auto.id === autoEditado.id ? autoEditado : auto))
        setAutos(changeAutos)
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6">
                    <h1>LISTA</h1>
                    {
                        autos.map(auto =>
                            <TarjetaAuto
                                key={auto.id}
                                auto={auto}
                                tarjetaDelete={tarjetaDelete}
                                setAutoEditado={setAutoEditado}
                            />)
                    }
                </div>
                <div className="col-6">
                    <h1>FORMULARIO</h1>
                    <FormularioAuto
                        autoAdd={autoAdd}
                        autoEditado={autoEditado}
                        autoEdit={autoEdit}
                        setAutoEditado={setAutoEditado}
                    />
                </div>
                <hr/>
                <div className="redirect" align="center">
                    <button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={handleOnClick}>IR A USUARIOS</button>
                </div>
            </div>
        </div>
    )
}

export default AutoComponent;