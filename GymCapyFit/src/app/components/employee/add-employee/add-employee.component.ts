import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
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

  constructor() { }

  signup() {
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
