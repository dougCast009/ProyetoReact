import React from "react";
import CartaPaciente from "./CartaPaciente";

function Listado({pacientes}){
    return(
        <div className="col">
            <h2 className="text-center fw-bold">Pacientes Registrados</h2>
            <p className="text-center">Administra los Pacientes Registrados</p>
            {
                pacientes.map((paciente)=>{
                    return <CartaPaciente
                    nombrePaciente={paciente.nombrePaciente}
                    
                    fecha={paciente.fecha}
                    sintomas={paciente.sintomas}/>
                  })
            }
        </div>
    )
}

export default Listado