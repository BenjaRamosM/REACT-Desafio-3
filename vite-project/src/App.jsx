import { BaseColaboradores } from './BaseColaboradores'
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Alert from './components/Alert'
import Buscador from './components/Buscador'
import { useState } from 'react'

function App() {

  const [datosIniciales, setDatos] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({mensaje:'', tipo:''});


  const agregarColaborador = (nuevoColaborador)=> {

    if(nuevoColaborador.nombre===""||nuevoColaborador.id===""||nuevoColaborador.correo===""||nuevoColaborador.edad===""||nuevoColaborador.cargo===""||nuevoColaborador.telefono ===""){
            console.log("Todos los campos son obligatorios")
            setAlerta({mensaje:"Todos los campos son obligatorios",tipo:'error'})
            return;
    }


    setDatos([...datosIniciales,nuevoColaborador]);
    setAlerta({mensaje:'Ingreso Exitoso', tipo:'success'});
  }


  return (
    <>
    <h1>Listado de Colaboradores</h1>

    <Buscador baseDatos={datosIniciales} />

    <Listado baseDatos={datosIniciales}/>

    <div className='PadreForm'>

      <h3>Formulario de ingreso</h3>
      <Formulario agregarColaborador={agregarColaborador}/>

      <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />

    </div>

    

    </>
  )
}

export default App
