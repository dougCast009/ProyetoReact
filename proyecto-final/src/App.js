import './App.css';
import Registro from './Registro';
import Listado from './Listado';

function App() {
  return (
    <div className='container'>
      <h1 className='text-center'>Seguimiento Pacientes Clinica Castillo</h1>
      <div className='row row-cols-2'>
        <Registro></Registro>
        <Listado></Listado>
      </div>    
    </div>
  );
}

export default App;
