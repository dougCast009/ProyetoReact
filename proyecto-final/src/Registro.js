import React, {useState} from "react";
import './Registro.css';

function Registro({pacientes,setPacientes}){
    const [nombrePaciente,setNombre]=useState("")
    const [cedula,setCedula]=useState("")
    const [correo,setCorreo]=useState("")
    const [edad,setEdad]=useState("")
    const [fecIngreso,setFecIngreso]=useState("")
    const [sintomas,setSintomas]=useState("")

     function guardarPaciente(e){
        e.preventDefault()
        const paciente={
            nombrePaciente,
            cedula,
            correo,
            edad,
            fecIngreso,
            sintomas
        }
        
        setPacientes([...pacientes,paciente])
        console.log("Ya se ejecuto la funcion")

        setNombre("")
        setCedula("")
        setCorreo("")
        setEdad("")
        setFecIngreso("")
        setSintomas("")
     }

    return(
    <div className="col-12 col-md-6">
        <h2 className="text-center fw-bold">Registro Pacientes</h2>
        <p className="text-center">Complete todos los campos que se solicitan</p>
        <form class="row g-3 rounded-3 formulario p-4 mt-2" onSubmit={guardarPaciente}>
            <div>
                <label for="nombre" class="form-label">NOMBRE PACIENTE:</label>
                <input value={nombrePaciente} onChange={(e)=>{setNombre(e.target.value)}} type="text" class="form-control" id="nombre" placeholder="Ingrese el nombre completo"/>
            </div>
            <div>
                <label for="cedula" class="form-label">CEDULA IDENTIDAD:</label>
                <input value={cedula} onChange={(e)=>{setCedula(e.target.value)}} type="text" class="form-control" id="cedula" placeholder="Ingrese la Cedula de Identidad"/>
            </div>
            <div>
                <label for="correo" class="form-label">CORREO ELECTRONICO:</label>
                <input value={correo} onChange={(e)=>{setCorreo(e.target.value)}} type="email" class="form-control" id="correo" placeholder="Ingrese el Correo Electronico"/>
            </div>
            <div className="col-6">
                <label for="edad" class="form-label">EDAD:</label>
                <input value={edad} onChange={(e)=>{setEdad(e.target.value)}} type="number" class="form-control" id="edad" placeholder="Ingrese la Edad"/>
            </div>
            <div className="col-6">
                <label for="fecIngreso" class="form-label">FECHA INGRESO:</label>
                <input value={fecIngreso} onChange={(e)=>{setFecIngreso(e.target.value)}} type="date" class="form-control" id="fecIngreso"/>
            </div>
            <div>
                <label for="sintomas" class="form-label w-100">SINTOMAS:</label>
                <textarea value={sintomas} onChange={(e)=>{setSintomas(e.target.value)}} rows="4" cols="50" placeholder="Ingrese los sintomas del Paciente" className="w-100"></textarea>
            </div>
            <div className="col-12 col-md-4">
                <button type="submit" class="btn btn-success w-100">Guardar Paciente</button>
            </div>
        </form>
    </div>
    )
}

export default Registro