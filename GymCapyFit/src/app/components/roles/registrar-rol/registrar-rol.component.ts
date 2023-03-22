import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';

import { Rol } from 'src/app/models/Rol';

@Component({
  selector: 'app-registrar-rol',
  templateUrl: './registrar-rol.component.html',
  styleUrls: ['./registrar-rol.component.css']
})
export class RegistrarRolComponent{
  newRol: Rol = {
    Nombre: '',
    Descripcion: '',
    Privilegios: ''
    // createdAt: '',
    // updatedAt: ''
  }

  nameRol: string;
  descRol: string = '';

  @ViewChild('nombre') nombre;

  constructor(private capyfit: GymcapyfitService, 
    private activedRoute: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    
  }

  registrar(){
    if (this.nombre.nativeElement.value === '') {
      alert('Por favor ingrese un nombre válido');
      return;
    }
    if (this.descRol === '') {
      this.descRol = 'Sin descripción';
    }

    this.newRol.Nombre = this.nameRol;
    this.newRol.Descripcion = this.descRol;
    this.newRol.Privilegios = this.newRol.Nombre;

    console.log(this.newRol);

    // this.capyfit.saveRol(this.newRol).subscribe(
    //   res => {
    //     console.log(res);
    //     this.router.navigate(['/control-rol']);
    //   },
    //   err => console.log(err)
    // );
  }

}
