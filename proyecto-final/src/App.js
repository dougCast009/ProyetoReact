import './App.css';
import Registro from './Registro';
import Listado from './Listado';

function App() {
  return (
    <div className='container'>
      <h1 className='text-center mt-3 fw-bold'>Seguimiento Pacientes Clinica Castillo</h1>
      <div className='row row-cols-2 mt-4'>
        <Registro></Registro>
        <Listado></Listado>
      </div>    
    </div>
  );
}

export default App;
