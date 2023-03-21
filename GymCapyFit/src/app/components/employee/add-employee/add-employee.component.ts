import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  opcionesSeleccionadas: any[] = [];
  // opciones = [
  //   { IdRol: 1, Nombre: 'Opción 1', seleccionado: false },
  //   { IdRol: 2, Nombre: 'Opción 2', seleccionado: false },
  //   { IdRol: 3, Nombre: 'Opción 3', seleccionado: false }
  // ];
  
  opciones: any = [];

  opcion1 = false;
  opcion2 = false;
  opcion3 = false;

  empleado = {
    IdEmpleado: 0,
    Nombre: '',
    Edad: 0,
    Rol: [],
    Telefono: [],
    Sueldo: 0,
    Turno: '',
    Correo: '',
    Password: ''
  }

  checkbox = '';

  constructor(private capyfit: GymcapyfitService, private router: Router) {
    this.capyfit.getAllRoles().subscribe(
      resp=>{
        console.log(resp);
        this.opciones = resp;
        this.opciones = this.opciones.map(objeto => {
          return {...objeto, seleccionado: false};
        });
        console.log("_____________");
        console.log(this.opciones);
      },
      err => console.error(err)
    );
  }

  signup() {
    let roles = [];
    for (let opcion of this.opciones) {
      if (opcion.seleccionado) {
        this.opcionesSeleccionadas.push(opcion.Nombre);
      }
    }
    this.empleado.Rol = this.opcionesSeleccionadas;
    console.log("Roles seleccionados:", this.opcionesSeleccionadas);
    console.log(this.empleado);
    this.router.navigate(['/employees']);
  //  console.log(this.checkbox);
  //  console.log(this.empleado);
  //  this.authService.signUp(this.empleado)
  //    .subscribe(
  //      res => {
  //        console.log(res);
  //      },
  //      err => console.log(err));
  }
}

