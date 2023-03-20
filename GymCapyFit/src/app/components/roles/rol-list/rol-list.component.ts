import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';

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

}
