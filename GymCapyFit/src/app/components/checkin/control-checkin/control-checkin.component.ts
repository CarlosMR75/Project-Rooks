import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';

@Component({
  selector: 'app-control-checkin',
  templateUrl: './control-checkin.component.html',
  styleUrls: ['./control-checkin.component.css']
})
export class ControlCheckinComponent {
  employees: any = [];

  constructor(private capyfit: GymcapyfitService, private dataSharing: DataSharingService,private router:Router) {
    this.capyfit.getEmployees().subscribe(
      resp=>{
        console.log(resp);
        this.employees = resp;
        console.log(this.employees[2].Nombre);
      },
      err => console.error(err)
    );
  }
    
  toCheck(employee){
    this.dataSharing.employeeId = employee.IdEmpleado;
    //alert(this.dataSharing.employeeId);
    this.router.navigate(['/check-employee/'])
  }
}

