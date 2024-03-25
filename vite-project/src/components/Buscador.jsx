import {useState} from "react";

const Buscador = ({baseDatos})=>{

    const [nombreConsultado, setNombreConsultado] = useState("");
    const [resultado, setResultado]= useState([]);


    const capturarNombre=(e)=>{
        setNombreConsultado(e.target.value);
    };

    const realizarBusqueda = (e)=>{
        e.preventDefault();

        const filtrado = baseDatos.filter(colaborador => colaborador.nombre === nombreConsultado);
        setResultado(filtrado);
    };

    return(
        <>
        <div className="Buscador1">
            <form onSubmit={realizarBusqueda}>
            <input
                name = "buscador"
                placeholder="Buscar Nombre"
                value = {nombreConsultado}
                onChange={capturarNombre}

            />
            <button type="submit" className="btn btn-primary">Buscar</button>
            </form>  

        </div>

        <div className="Buscador2">
          <h3>Resultados de la búsqueda:</h3>
          <ul>
            {resultado.map(colaborador => (
              <li key={colaborador.id}>
                {colaborador.nombre} - {colaborador.id} - {colaborador.correo} - {colaborador.edad} - {colaborador.cargo}- {colaborador.telefono}
              </li>
            ))}
          </ul>
        </div>
        
        </>
    );
};

export default Buscador;