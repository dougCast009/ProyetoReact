import './App.css';
import Registro from './Registro';
import Listado from './Listado';
import {useState} from 'react'

function App() {
  const [pacientes,setPacientes]=useState([])
  return (
    <div className='container'>
      <h1 className='text-center mt-3 fw-bold'>Seguimiento Pacientes Clinica Castillo</h1>
      <div className='row row-cols-2 mt-4 mb-5'>
        <Registro pacientes={pacientes} setPacientes={setPacientes}></Registro>
        <Listado pacientes={pacientes}></Listado>
      </div>    
    </div>
  );
}

export default App;
