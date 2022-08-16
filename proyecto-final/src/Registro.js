import React from "react";

function Registro(){
    return(
    <div className="col">
        <h2 className="text-center fw-bold">Registro Pacientes</h2>
        <p className="text-center">Complete todos los campos que se solicitan</p>
        <form class="row g-3 rounded-1 bg-primary text-white">
            <div>
                <label for="nombre" class="form-label">NOMBRE PACIENTE:</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ingrese el nombre completo"/>
            </div>
            <div>
                <label for="cedula" class="form-label">CEDULA IDENTIDAD:</label>
                <input type="text" class="form-control" id="cedula" placeholder="Ingrese la Cedula de Identidad"/>
            </div>
            <div>
                <label for="correo" class="form-label">CORREO ELECTRONICO:</label>
                <input type="email" class="form-control" id="correo" placeholder="Ingrese el Correo Electronico"/>
            </div>
            <div className="col-6">
                <label for="edad" class="form-label">EDAD:</label>
                <input type="number" class="form-control" id="edad"/>
            </div>
            <div className="col-6">
                <label for="fecIngreso" class="form-label">FECHA INGRESO:</label>
                <input type="calendar" class="form-control" id="fecIngreso"/>
            </div>
        </form>
    </div>
    )
}

export default Registro