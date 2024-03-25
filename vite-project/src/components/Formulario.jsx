import { useState } from "react";


const Formulario = ({agregarColaborador})=>{


    const [nuevoColaborador, setNuevoColaborador] = useState({
        id: "",
        nombre:"",
        correo:"",
        edad:"",
        cargo: "",
        telefono:""

    });

    const capturarNuevo = (e)=>{
        const {name, value} = e.target;
        setNuevoColaborador({...nuevoColaborador,[name]:value});
     }

    const enviarFormulario=(e)=>{
        e.preventDefault();

        agregarColaborador(nuevoColaborador);
        console.log('Enviando Formulario');
        setNuevoColaborador(
            {
                id: "",
                nombre:"",
                correo:"",
                edad:"",
                cargo: "",
                telefono:""
            }
        );

    }

    return(

        <>
        <div>
            <form onSubmit={enviarFormulario} className="Formulario">
            <input name = "id" placeholder="id" value = {nuevoColaborador.id} onChange = {capturarNuevo} />
            <input name = "nombre" placeholder="Nombre" value={nuevoColaborador.nombre} onChange = {capturarNuevo} />
            <input name = "correo" placeholder="Correo" value = {nuevoColaborador.correo} onChange = {capturarNuevo} />
            <input name = "edad" placeholder="Edad" value = {nuevoColaborador.edad} onChange = {capturarNuevo} />
            <input name = "cargo" placeholder="Cargo" value = {nuevoColaborador.cargo} onChange = {capturarNuevo} />
            <input name = "telefono" placeholder="Telefono" value={nuevoColaborador.telefono} onChange = {capturarNuevo} />
            <button type="submit" className="btn btn-primary">Agregar Colaborador</button>

            </form>  
        </div>  
        </>
    );
};

export default Formulario;