
import { useState } from "react";

const Listado = ({baseDatos}) =>{

    const [listaColegas, setListaColegas]=useState(baseDatos);
    
    const eliminarColega=(colega)=>{
        const listaFiltrada = listaColegas.filter(el=>el.nombre !== colega.nombre)
        setListaColegas(listaFiltrada);
    }
    return(
        <>
            <table className="table">
            <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col"># id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Edad</th>
      <th scope="col">Cargo</th>
      <th scope="col">Telefono</th>
    </tr>
  </thead>
  <tbody>
    {baseDatos.map(colega=>(
    <tr key = {colega.id}>
        <th scope="row">{colega.id}</th>
        <td>{colega.nombre}</td>
        <td>{colega.correo}</td>
        <td>{colega.edad}</td>
        <td>{colega.cargo}</td>
        <td>{colega.telefono}</td>
        <td>
            <button onClick={()=>eliminarColega(colega)}>Borrar</button>
        </td>
    </tr>
    ))}

  </tbody>
</table>
        </>
    );
};

export default Listado;