//1a. IMPORT REACT LIBRARY
//1f. IMPORTAR HOOKS
import React, { useState, useEffect } from 'react';
//24. CREAR LA CONSTANTE ARRAY DE OBJETOS VACIA A USAR COMO VALOR INICIAL PARA useState
const initialValues = [
    {
        key: '',
        nombre: '',
        apellido: '',
        edad: '',
        password: ''
    }
]

//55. CREAR LA CONSTANTE ARRAY DE OBJETOS VACIA A USAR COMO VALOR INICIAL PARA useState DE AUTOS
const autoValues = [
    {
        id: '',
        marca: '',
        modelo: '',
        velocidad: '',
        color: ''
    }
]
//7. ARROW FUNCTION DE TODO COMPONENTE
// UN COMPONENTE ES UN EXTRACTO DE UN HTML ENTERO
// EL NOMBRE DEL COMPONENTE TOMA EL LUGAR DE TODO EL CODIGO
//34. RECIBIR FUNCTION PROP {usuarioAdd}, EN ESTE PUNTO LA PROP SE COMUNICA CON Y DESDE OTROS COMPONENTES
//40. RECIBIR FUNCTION PROP {usuarioEditado}, EN ESTE PUNTO LA PROP SE COMUNICA CON Y DESDE OTROS COMPONENTES
//50. RECIBIR FUNCTION PROP {usuarioEdit}, EN ESTE PUNTO LA PROP SE COMUNICA CON Y DESDE OTROS COMPONENTES
const FormularioComponent = ({ usuarioAdd, usuarioEditado, usuarioEdit, setUsuarioEditado }) => {
    //23. INICIALIZAR EL useState, SIEMPRE DENTRO DEL COMPONENTE
    const [values, setValues] = useState(initialValues);
    //26. CREAR OBJETO PARA USAR LOS VALORES DE initialValues, INDICA LOS VALORES A AGREGAR Y SUS PROPIEDADES AL values
    const { key, nombre, apellido, edad, password } = values;
    //41a. HOOK useEffecT("por favor haz esto", ["si a esto le pasa algo (estado al pendiente)"])
    //41b. useEffect DEBE CAMBIAR SEGUN EL ESTADO DE usuarioEditado, SI TIENE VALORES ES EDIT, SI ES null ES CREAR
    useEffect(
        () => {
            //42a. SI usuarioEditado NO ES null,
            if (usuarioEditado !== null) {
                //42b. ENTREGA Y SETEA LOS VALORES QUE YA TIENE EL usuarioEditado
                setValues(usuarioEditado)
            } else {
                //54. SI EL usuarioEditado ES null O NO TIENE CAMBIOS, LIMPIA Y SETEA LOS CAMBIOS CON LO SIGUIENTE
                setValues(
                    {
                        key: '',
                        nombre: '',
                        apellido: '',
                        edad: '',
                        password: ''
                    }
                )
            }
        },
        [usuarioEditado]);
    //27. FUNCION DE DETECCION DE CAMBIO PARA RECIBIR LOS CAMBIOS DE values ALMACENADOS EN INPUTS DE FORMULARIO EN EL MOMENTO DEL EVENTO e
    const handleInputChange = (e) => {
        //28. CAPTURAR EL target O ATRIBUTO DESDE EL form
        const changeFormValue = {
            //28a. MANTEN LOS VALORES INICIALES DE LO QUE TIENES ACTUALMENTE EN values, ENTREGADO POR useState y const {} = values
            ...values,
            //28b. PERO MODIFICA SOLO EL VALOR DE values e.target.name (name="key"), CON EL DEL EVENTO DISPARADO O MODIFICADO EN EL FORMULARIO e.target.value (value={key})
            [e.target.name]: e.target.value
        }
        //28c. CAMBIA Y SETEA LOS NUEVOS VALORES ENTREGADOS CON e.target.name EN EL ARRAY ORIGINAL COPIADO CON useState (YA SEA VACIO O NO) values
        setValues(changeFormValue);
    }
    //29a. CREAR FUNCION LLAMADA POR onSubmit handleSubmit LLAMADA DESDE EL EVENTO onSubmit
    const handleSubmit = (e) => {
        //29b. EVITAR O CANCELAR QUE LA PAGINA SE ACTUALICE DE FORMA AUTOMATICA Y DETIENE CUALQUIER EJECUCION POR DEFECTO DEL HTML
        e.preventDefault();
        //45a. CREAR CONDICIONAL PARA EJECUTAR SI edita O crea UN USUARIO
        //45b. SI usuarioEditado ES DISTINTO Y TIENE NUEVOS VALORES,
        if (usuarioEditado !== null) {
            //51a. RETORNA LOS VALORES USANDO LA FUNCION usuarioEdit, HA MODIFICADO LOS VALORES ORIGINALES (DE LA COPIA useState) DEL ARRAY
            usuarioEdit(values)
        } else {
            //35. usuarioAdd LLAMA A LA FUNCION CREADA EN OTRO COMPONENTE ORIGEN
            //36. AGREGAR EL NUEVO values SETEADO CON NUEVA INFORMACION
            //51b. AGREGA LOS VALORES NUEVOS USANDO LA FUNCION usuarioAdd AL ARRAY (DE LA COPIA useState)
            usuarioAdd(values)
        }
    }
    return (
        //29. FUNCION onSubmit EN EL FORMULARIO PARA QUE DETECTE EL SUBMIT O EVENTO DE CLIC DEL BOTON
        <form className="form" onSubmit={handleSubmit}>
            {/* 43a. CONDICIONAL JS {}, ? SIGNIFICA " X cosa, es nulo?" */}
            {/* 43b. VERIFICAR SI LA VARIABLE TIENE O NO DATOS USANDO ? */}
            {/* 43c. 'X' ? (ES NULO?), SI NO ES NULO 'muestra A' : SI ES NULO 'muestra B' */}
            <h1>{usuarioEditado ? 'EDITAR USUARIO' : 'CREAR USUARIO'}</h1>
            <div className="form-group">
                {/* 25. CREAR EL CAMPO PARA LA KEY O ID DEL FORMULARIO */}
                <label>ID</label>
                <input type="text"
                    className="form-control"
                    id="key"
                    placeholder="KEY"
                    //26a. EL VALUE RECIBE EL VALOR INGRESADO AL FORMULARIO, REACCIONA AL CAMBIO EN EL INPUT Y LO ALMACENA TEMPORALMENTE
                    value={key}
                    name="key"
                    //27a. PARA LLAMAR A LA FUNCION handleInputChange PRONTO COMO EL EVENTO PASE EN EL FORMULARIO
                    //27b. CUANDO CAMBIE ALGUN VALOR, LLAMA A LA FUNCION handleInputChange
                    onChange={handleInputChange}
                />
                <br />
                {/*. SE ABRE FORMULARIO, CADA LABEL DEBE LLEVAR SU INPUT */}
                <label>NOMBRE</label>
                <input type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="NOMBRE"
                    value={nombre}
                    name="nombre"
                    onChange={handleInputChange}
                />
                <br />
                <label>APELLIDO</label>
                <input type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="APELLIDO"
                    value={apellido}
                    name="apellido"
                    onChange={handleInputChange}
                />
                <br />
                <label>EDAD</label>
                <input type="text"
                    className="form-control"
                    id="edad"
                    placeholder="EDAD"
                    value={edad}
                    name="edad"
                    onChange={handleInputChange}
                />
                <br />
                <label>PASSWORD</label>
                <input type="password"
                    className="form-control"
                    id="password"
                    placeholder="PASSWORD"
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div>
                {/* 4. AGREGAR BOTONES TIPO SUBMIT */}
                {/* 44a. AGREGAR FUNCIONALIDAD A BOTON SEGUN SE DEBA CREAR O EDITAR */}
                {/* 44b. SI EL FORMULARIO ESTA EN editar, EL BOTON MUESTRA editar. SI EL FORMULARIO ESTA EN crear, EL BOTON MUESTRA crear */}
                {/* 44c. 'X' ? (ES NULO?), SI NO ES NULO 'muestra A' : SI ES NULO 'muestra B'*/}
                <button type="submit" className="btn btn-sm btn-outline-primary me-2">{usuarioEditado ? 'EDITAR' : 'CREAR'}</button>
                {/* 52a. AGREGAR BOTON onClick CANCELAR */}
                {/* 52b. AL onClick, LIMPIA LOS CAMPOS DEL USUARIO EDITADO, DEJALOS EN null, SI EL usuarioEditado NO ES null ?, MUESTRA Y QUE FUNCIONE EL BOTON */}
                {usuarioEditado ?
                    (<button className="btn btn-sm btn-outline-warning" onClick={() => { setUsuarioEditado(null) }}>CANCELAR</button>) : null}
            </div>
        </form>
    )
}

//56. CREAR COMPONENTE PARA RECIBIR DATOS DE AUTOS, DE EJERCICIO E IMPORTAR PROPS
const FormularioAuto = ({ autoAdd, autoEditado, setAutoEditado }) => {
    const [values, setValues] = useState(autoValues);
    //57. MODIFICAR VALORES A CAPTURAR DEL FORMULARIO, SALVO ID, QUE ES AUTO INCREMENTAL
    const { marca, modelo, velocidad, color, valor } = values;
    //58a. MODIFICAR HOOK useEffect PARA RECIBIR DATOS DE EJEMPLO AUTO
    useEffect(
        () => {
            if (autoEditado !== null) {
                setValues(autoEditado)
            } else {
                setValues(
                    {
                        id: '',
                        marca: '',
                        modelo: '',
                        velocidad: '',
                        color: '',
                        valor: 0
                    }
                )
            }
        },
        [autoEditado]);
    const handleInputChange = (e) => {
        const changeFormValue = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(changeFormValue);
    }
    //83a. RECICLAR FUNCION PARA QUE axios CREE O EDITE SOLAMENTE USANDO EL MISMO handleSubmit
    //83b. AL SER LA MUSMA FUNCION autoAdd, EL if statement NO ES NECESARIO EN ESTE CASO
    const handleSubmit = (e) => {
        e.preventDefault();
            autoAdd(values);
    }
    return (
        //58b. MODIFICAR VALORES PARA RECIBIR DATOS DE EJEMPLO AUTO
        <form className="form" onSubmit={handleSubmit}>
            <h1>{autoEditado ? 'EDITAR AUTO' : 'CREAR AUTO'}</h1>
            <div className="form-group">
                <label>MARCA</label>
                <input type="text"
                    className="form-control"
                    id="marca"
                    placeholder="MARCA"
                    value={marca}
                    name="marca"
                    onChange={handleInputChange}
                />
                <br />
                <label>MODELO</label>
                <input type="text"
                    className="form-control"
                    id="modelo"
                    placeholder="MODELO"
                    value={modelo}
                    name="modelo"
                    onChange={handleInputChange}
                />
                <br />
                <label>VELOCIDAD</label>
                <input type="numeric"
                    className="form-control"
                    id="velocidad"
                    placeholder="VELOCIDAD"
                    value={velocidad}
                    name="velocidad"
                    onChange={handleInputChange}
                />
                <br />
                <label>COLOR</label>
                <input type="text"
                    className="form-control"
                    id="color"
                    placeholder="COLOR"
                    value={color}
                    name="color"
                    onChange={handleInputChange}
                />
                <br />
                <label>VALOR</label>
                <input type="numeric"
                    className="form-control"
                    id="valor"
                    placeholder="VALOR"
                    value={valor}
                    name="valor"
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div>
                <button type="submit" className="btn btn-sm btn-outline-primary me-2">{autoEditado ? 'EDITAR' : 'CREAR'}</button>
                {autoEditado ?
                    (<button className="btn btn-sm btn-outline-warning" onClick={() => { setAutoEditado(null) }}>CANCELAR</button>) : null}
            </div>
        </form>
    )
}
//59. AL EXPORTAR MAS DE UN COMPONENTE, SE QUITA default Y SE USAN {};
export { FormularioComponent, FormularioAuto };