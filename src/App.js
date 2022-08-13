//1A. IMPORT REACT LIBRARY
//1b. INSTALAR BOOTSTRAP npm install react-bootstrap bootstrap
import React from "react";
//1c. IMPORTAR COMPONENTES A USAR
//import TarjetaComponent from "./components/TarjetaComponent";
//import FormularioComponent from "./components/FormularioComponent";
//1d. EN CASO DE USAR UN COMPONENTE DENTRO DE COMPONENTES, SOLO EL QUE ENGLOBA A TODOS IRA EN APP.JS
import UsuarioComponent from "./components/UsuarioComponent";
import AutoComponent from "./components/AutoComponent";
//63b. IMPORTAR REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

//2. CREATE APP FUNCTION, ESTO EJECUTA TODO, CONSTANTE PARA QUE VIVA EN TODO EL PROGRAMA
const App = () => {
  return (
    //64. ENGLOBAR LOS COMPONENTES DENTRO DE ROUTER DOM
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsuarioComponent />}></Route>
        <Route path="/autos" element={<AutoComponent />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

//POSTMAN + API + STS + DATABASE
//66. TRABAJAR APIa USANDO POSTMAN DESDE BACKEND
//67a. 
//67b. POSTMAN > + > GET> localhost:XXXX/api/obtener/autos
/*68a. EN STS, API GUARDAR
  @PostMapping("/guardar/auto")
  public ResponseEntity<Auto> guardarAuto(@RequestBody Auto auto){
    autoService.guardarAuto(auto);
    return new ResponseEntity<Auto>(auto, HttpStatus.OK);
  } 
  68b. POSTMAN> + > POST> localhost:XXXX/api/guardar/auto
  68c. body> RAW> JSON*/
/*69a. EN STS, API ELIMINAR
    @PostMapping("/eliminar/{id}")
  public ResponseEntity<Auto> eliminarAuto(@PathVariable Long id){
    try {
      autoService.eliminarPorId(id);
      return new ResponseEntity<Auto>(HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<Auto>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  69b. POSTMAN> + > POST> localhost:XXXX/api/eliminar/{id}*/

//AXIOS + REACT
//70a. INSTALAR AXIOS npm install axios
//70b. CREAR CARPETA services > AutoService.js