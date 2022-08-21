import React from "react";
import CartaPaciente from "./CartaPaciente";

function Listado({pacientes}){
    return(
        <div className="col-12 col-md-6">
            <h2 className="text-center fw-bold">Pacientes Registrados</h2>
            <p className="text-center">Administra los Pacientes Registrados</p>
            {
                pacientes.map((paciente)=>{
                    return <CartaPaciente
                    nombrePaciente={paciente.nombrePaciente}
                    cedula={paciente.cedula}
                    correo={paciente.correo}
                    edad={paciente.edad}
                    fecIngreso={paciente.fecIngreso}
                    sintomas={paciente.sintomas}/>
                  })
            }
        </div>
    )
}

export default Listado