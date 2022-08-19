import React from "react";

function CartaPaciente({nombrePaciente,fecha,sintomas}){
    return(
        <div class="card">
        <div class="card-body">
            <p>*Nombre Paciente {nombrePaciente}</p>
            <p>*Fecha {fecha}</p>
            <p>*Sintomas {sintomas}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  
    )
}

export default CartaPaciente