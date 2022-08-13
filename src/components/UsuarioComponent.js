//1f. IMPORTAR HOOKS
//65a. IMPORTAR HOOK useCallback
import React, { useState, useCallback } from 'react';
//1e. EN CASO DE USAR UN COMPONENTE DENTRO DE COMPONENTES, QUIEN ENGLOBA LOS OTROS COMPONENTES REQUIERE LOS IMPORT DE LOS ENGLOBADOS
import { TarjetaComponent } from './TarjetaComponent';
//60. AL IMPORTAR UN COMPONENTE CON 2 CONST, USAR SYNTAX CON {}
import { FormularioComponent } from './FormularioComponent';
//65b. IMPORTAR useNavigate DOM
import {useNavigate} from 'react-router-dom';

//9. PRUEBA CON CONSTANTES ESTATICAS TIPO ARRAY, ESTAS DEBEN SER CONSUMIDAS EN EL COMPONENTE DESEADO, NO USAR, ES SOLO EJEMPLO
/*const usuario1 = {
    nombre: 'a',
    apellido: 'b',
    edad: '1'
}
const usuario2 = {
    nombre: 'c',
    apellido: 'd',
    edad: '2'
}*/

//13a. USO DE JSON ARRAY PARA ITERAR [{}]
//13b. SE CONSUME API JSON DESDE BASE DE DATOS
//15. CAMBIO DE NOMBRE PARA USARLO EN HOOK useState
const initialUsuarios = [
    {
        key: 0,
        nombre: 'a',
        apellido: 'b',
        edad: '1',
        password: 'abc'
    },
    {
        key: 1,
        nombre: 'c',
        apellido: 'd',
        edad: '2',
        password: 'def'
    }
]

//8a. FUNCION COMPONENTE DENTRO DE COMPONENTE
//8b. A ESTA VARIABLE SE LE ASIGNA UNA FUNCION Y EL return
//8c. DENTRO DE LA FUNCION LA CONSTANTE PUEDE RECIBIR UNO O MAS PARAMETROS
const UsuarioComponent = () => {
    //16. LOS HOOKS INICIALIZAN Y VAN DENTRO DEL COMPONENTE Y ANTES DEL RETURN, NO VIVEN FUERA
    //17a. useState INSTANCIA Y ENTREGA UN INICIAL ORIGINAL Y UNA FUNCION PARA MODIFICAR EL INICIAL, GENERANDO UNA COPIA
    //17b. [trae array de algo, permite modificar la copia(editar, eliminar, agregar)]
    const [usuarios, setUsuarios] = useState(initialUsuarios)
    //37. CREAR UN ESTADO PARA RECEPCIONAR LOS VALORES AL onClick EDITAR, POR DEFECTO TIENE QUE VENIR VACIO O null, YA QUE NORMALMENTE EN PRIMERA INSTANCIA NO TIENE NINGUN VALOR QUE EDITAR
    const [usuarioEditado, setUsuarioEditado] = useState(null)
    //66. CREAR FUNCION PARA NAVEGAR ENTRE COMPONENTES O VISTAS
    const navigate = useNavigate();
    //67a. CREAR FUNCION PARA MANEJAR EL onClick AL NAVEGAR CON LOS BOTONES DE REDIRECCION
    //67b. REQUIERE path, replace, Y HOOK navigate como 3 parametros
    //67c. ES DISTINTO DE UN a O UN link (SOBREPONEN), navigate REEMPLAZA
    const handleOnClick = useCallback(() => navigate('/autos', {replace: true}, [navigate]));

    //18. CREAR FUNCION PARA ELIMINAR UN COMPONENTE DE LA VISTA, EN ESTE CASO SEGUN LA VARIABLE KEY O ID
    const tarjetaDelete = (usuarioKey) => {
        //19. FILTRANDO LA LISTA INICIAL, POR CADA USUARIO ITERA Y VERIFICA => QUE LA KEY O ID usuario.key DE ESE USUARIO SEA != DEL USUARIO QUE SE ESTA INGRESANDO
        // SI LA KEY O ID ES !==, LA GUARDARA EN changeUsuarios, SI ES ===, LA ELIMINA (FILTRA)
        const changeUsuarios = usuarios.filter(usuario => usuario.key !== usuarioKey);
        //20. FUNCION QUE DICE: CAMBIAME EL setUsuarios POR LA NUEVA LISTA FILTRADA changeUsuarios
        // HACE QUE EL NUEVO ESTADO INICIAL NO TENGA EL USUARIO ELIMINADO (FILTRADO)
        setUsuarios(changeUsuarios)
    }

    //30a. CREAR FUNCION PARA AGREGAR UN USUARIO DESDE EL FORMULARIO COMPONENT E INPUTS DESDE EL FORMULARIO VISTA
    //30b. EL OBJETO ARRAY SE VA A CREAR COMO USUARIO EN ESTA CONSTANTE AL SELECCIONAR SUBMIT
    const usuarioAdd = (usuario) => {
        const addUsuarios = [
            //31a. MANTEN LOS VALORES INICIALES DE LO QUE TIENES ACTUALMENTE EN ARRAY usuarios
            ...usuarios,
            //31b. PERO AGREGA EL USUARIO QUE TE PASO
            usuario
        ]
        //32. CAMBIA EL ESTADO useState POR LA LISTA CON LOS NUEVOS VALORES AGREGADOS CON addUsuarios
        setUsuarios(addUsuarios)
    }

    //46. CREAR FUNCION PARA EDITAR VALORES DE UN USUARIO EXISTENTE EN LA LISTA, MEMORIA, ETC.
    const usuarioEdit = (usuarioEditado) => {
        //47a. map ITERABLE de usuario, POR CADA ITERACION, SI SE ENTREGAN COMPARABLES ? VERIFICA SI ES true O false
        //47b. SI EL VALOR DE usuario.key ES IGUAL === AL DE usuarioEditado.key,
        //47c. INGRESA EL MISMO usuarioEditado (con sus respectivos cambios) AL ARRAY
        //47d. SI ES DISTINTO, INGRESA EL usuario ORIGINAL (sin cambios) AL ARRAY
        const changeUsuarios = usuarios.map(usuario => (usuario.key === usuarioEditado.key ? usuarioEditado : usuario))
        //48. SETEAR EL NUEVO ARRAY DESDE changeUsuarios
        setUsuarios(changeUsuarios)
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6">
                    <h1>LISTA</h1>
                    {/* 14a. ITERADOR MAP PARA ITERAR O RECORRER ARRAYS JSON USANDO UN ALIAS REFERENTE*/}
                    {/* 14b. POR CADA usuario ENCONTRADO EN usuarios, CREA UNA NUEVA TarjetaComponent CON UN ID key DEL usuario USANDO LA PROPIEDAD usuario CON LOS PARAMETROS DEL ARRAY usuario */}
                    {
                        usuarios.map(usuario =>
                            //14c. LUEGO PASA AL SIGUIENTE, Y AL SIGUIENTE, Y ASI
                            <TarjetaComponent
                                key={usuario.key}
                                usuario={usuario}
                                //20a. ENTREGAR FUNCION tarjetaDelete PARA LLEVARLA COMO PROPIEDAD A OTROS COMPONENTES Y LLAMARLA DESDE ALLI
                                tarjetaDelete={tarjetaDelete}
                                //38. ENTREGAR FUNCION setUsuarioEditado PARA LLEVARLA COMO PROP A OTROS COMPONENTES Y LLAMARLA DESDE ALLI
                                setUsuarioEditado={setUsuarioEditado}
                            />)
                    }
                    {/* 6. EL COMPONENTE TOMA EL LUGAR DE TODO EL EXTRACTO DE CODIGO */}
                    {/* 10. AGREGA LA CONSTANTE ESTATICA nombre={nombreX} */}
                    {/*<TarjetaComponent usuario={usuario1} />*/}
                    {/*<TarjetaComponent usuario={usuario2} />*/}
                </div>
                <div className="col-6">
                    <h1>FORMULARIO</h1>
                    {/* 33. ENVIAR LA FUNCION usuarioAdd AL COMPONENTE DESTINO COMO PROP*/}
                    <FormularioComponent
                        usuarioAdd={usuarioAdd}
                        usuarioEditado={usuarioEditado}
                        //49. ENVIAR FUNCION EDITAR COMO PROP AL COMPONENTE DESTINO
                        usuarioEdit={usuarioEdit}
                        //53. ENTREGAR FUNCION setUsuarioEditado PARA LLEVARLA COMO PROP A OTROS COMPONENTES Y LLAMARLA DESDE ALLI
                        setUsuarioEditado={setUsuarioEditado}
                    />
                </div>
                <hr/>
                <div className="redirect" align="center">
                    {/* 62. AGREGAR BOTON PARA CAMBIAR ENTRE VISTAS, RECIBIENDO FUNCION handleOnClick */}
                    <button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={handleOnClick}>IR A AUTOS</button>
                </div>
                {/* 63a. INSTALAR REACT ROUTER DOM, npm install react-router-dom DESDE LA TERMINAL*/}
            </div>
        </div>
    )
}

export default UsuarioComponent;