/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import {ContadorConHook} from "./Components/ContadorConHook"

import { Formularios } from "./Components/Formularios";

// import { Usuarios } from "./Components/Usuarios";

// import { Login } from "./Components/Login";

// import { Contador } from "./Components/contador";

// import React from 'react';
// import { TiposBasicos } from './typescript/TiposBasicos';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Funciones } from './typescript/Funciones';

const App = () => {

  return (
    <div className =" mt-2">
      <h1>Introduccion a TS- REACT</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* {<Funciones/>} */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      {/* <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
    </div>
  )
}

export default App;