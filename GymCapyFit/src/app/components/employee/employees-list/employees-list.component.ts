import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  employees: any = [];

  constructor(private capyfit: GymcapyfitService,private router:Router) {
    this.capyfit.getEmployees().subscribe(
      resp=>{
        console.log(resp);
        this.employees = resp;
      },
      err => console.error(err)
    );
  }
}
