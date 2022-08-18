import React from "react";
import './Registro.css';

function Registro(){
    return(
    <div className="col-12 col-md-6">
        <h2 className="text-center fw-bold">Registro Pacientes</h2>
        <p className="text-center">Complete todos los campos que se solicitan</p>
        <form class="row g-3 rounded-3 formulario p-4 mt-2">
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
                <input type="text" class="form-control" id="fecIngreso"/>
            </div>
            <div>
                <label for="sintomas" class="form-label w-100">SINTOMAS:</label>
                <textarea rows="4" cols="50" placeholder="Ingrese los sintomas del Paciente" className="w-100"></textarea>
            </div>
            <div className="col-12 col-md-4">
                <button type="button" class="btn btn-success w-100">Guardar Paciente</button>
            </div>
        </form>
    </div>
    )
}

export default Registro