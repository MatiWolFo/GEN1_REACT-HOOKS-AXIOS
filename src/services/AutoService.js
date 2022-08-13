import axios from "axios";

//71. CREAR CONSTANTE URL BASE localhost:XXXX
const baseUrl = "http://localhost:8080/api"

//72a. CREAR FUNCION PARA OBTENER EL JSON DE AUTOS CON SUS VALORES
//72b. ES UNA FUNCION async, FUNCIONA EN PARALELO MIENTRAS OTRAS SE EJECUTAN
const getAll = async() => {
    //73a. ESPERA await A QUE AXIOS HAGA UN send GET request PARA FUNCIONAR, await FUNCIONA SOLO DENTRO DE FUNCIONES async
    const res = await axios.get(baseUrl + "/obtener/autos")
    //73b. Y RETORNA ESOS DATOS
    return res.data;
}

//78a. CREAR FUNCION PARA ELIMINAR DATA DE LA Db EN BASE A LA id Y QUE SE REFLEJE
const eliminarAuto = async(id) => {
    //78b. ESPERA await A QUE AXIOS HAGA UN send POST request PARA FUNCIONAR, PETICION POR path
    const res = await axios.post(baseUrl + "/eliminar/" + id)
    //78c. RETORNAR LA DATA
    return res.data;
}

//81a. CREAR FUNCION PARA GUARDAR DATA EN LA Db EN BASE AL OBJETO AUTO Y QUE REFLEJE LOS CAMBIOS
const saveAuto = async (auto) => {
    //81b. AL PASAR UN OBJETO, SE DEBE AGREGAR COMO PARAMETRO, ES EL EQUIVALENTE AL JSON DE POSTMAN
    const res = await axios.post(baseUrl + "/guardar/auto", auto)
    //81c. RETORNAR LA DATA
    return res.data;
}

    

export {getAll, eliminarAuto, saveAuto};