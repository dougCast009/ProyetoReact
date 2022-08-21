import React from "react";
import './CartaPaciente.css';

function CartaPaciente({nombrePaciente,cedula,correo,edad,fecIngreso,sintomas}){
    return(
        <div class="card mt-3">
        <div class="card-body">
            <p><span className="fw-bold">Nombre Paciente:</span> {nombrePaciente}</p>
            <p><span className="fw-bold">Cedula:</span> {cedula}</p>
            <p><span className="fw-bold">Correo:</span> {correo}</p>
            <p><span className="fw-bold">Edad:</span> {edad} años</p>
            <p><span className="fw-bold">Fecha Ingreso:</span> {fecIngreso} </p>
            <p><span className="fw-bold">Sintomas:</span> {sintomas}</p>
            <div className="d-grid gap-2 d-md-block d-md-flex justify-content-md-between">
                <a href="#" class="btn btnEditar col-12 col-md-4">Editar</a>
                <a href="#" class="btn btnEliminar col-12 col-md-4">Eliminar</a>    
            </div>
        </div>
      </div>
  
    )
}

export default CartaPaciente