import React from "react";

function CartaPaciente({nombrePaciente,cedula,correo,edad,fecIngreso,sintomas}){
    return(
        <div class="card mt-3">
        <div class="card-body">
            <p><span className="fw-bold">Nombre Paciente:</span> {nombrePaciente}</p>
            <p><span className="fw-bold">Cedula:</span> {cedula}</p>
            <p><span className="fw-bold">Correo:</span> {correo}</p>
            <p><span className="fw-bold">Edad:</span> {edad}</p>
            <p><span className="fw-bold">Fecha Ingreso:</span> {fecIngreso}</p>
            <p><span className="fw-bold">Sintomas:</span> {sintomas}</p>
            <div className="d-grid gap-2 d-md-block">
                <a href="#" class="btn btn-success col-12 col-md-4">Editar</a>
                <a href="#" class="btn btn-danger col-12 col-md-4">Eliminar</a>    
            </div>
        </div>
      </div>
  
    )
}

export default CartaPaciente