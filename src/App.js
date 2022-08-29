import logotareas from './img/logo-tarea.png';
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img 
        src={logotareas}
        className='img-logo'
        alt='logoimg'/>
        
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
        
      </div>
    </div>
  );
}

export default App;
