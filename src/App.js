import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg';
import { useState } from 'react';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(true)

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
     <div>

      <Header />

      {mostrarFormulario ? <Formulario /> : <></>}

      <MiOrg cambiarMostrar={cambiarMostrar} />

    </div>
  );
}

export default App;
