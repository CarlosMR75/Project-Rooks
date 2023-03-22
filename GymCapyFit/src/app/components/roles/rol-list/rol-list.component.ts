import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
  styleUrls: ['./rol-list.component.css']
})
export class RolListComponent {
  selectedRol: any;
  @ViewChild('deleteModal') deleteModal!: ElementRef;
  roles: any = [];

  constructor(private capyfit: GymcapyfitService) {
    this.capyfit.getAllRoles().subscribe(
      resp=>{
        console.log(resp);
        this.roles = resp;
        this.selectedRol = this.roles[0];
      },
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    
  }

  showModal(rol: any){
    this.selectedRol = rol;
  }

  deleteRol(rol: any){
    console.log(rol.Nombre);
    this.capyfit.deleteRol(rol.Nombre).subscribe(res => {
      console.log(res);
    },
    err => { console.error(err)}
    );
  }

  modalSWA2(rol: any){
    this.selectedRol = rol;
    Swal.fire({
      title: '¿Quieres borrar el rol?',//+this.selectedRol.Nombre,//Estás seguro?
      text: 'Esta acción no se puede deshacer.',//+this.selectedRol.Nombre,
      html: '<p>Rol: '+this.selectedRol.Nombre+'</p>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, hacerlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Hecho!', 'Has eliminado al rol '+this.selectedRol.Nombre, 'success');//'El usuario ha seleccionado "Sí, hacerlo".', 'success');
        this.deleteRol(rol);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'No se ha eliminado al rol', 'error');
      }
    }); 
  }
}
