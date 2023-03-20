import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';

@Component({
  selector: 'app-regrol',
  templateUrl: './regrol.component.html',
  styleUrls: ['./regrol.component.css']
})
export class RegrolComponent {

  constructor(private capyfit: GymcapyfitService,
    private activedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    let a = params['id'];
    const name = document.getElementById('nombre') as HTMLInputElement;
    name.value = a;
    name.readOnly = true;
  }

  editar(){
    //
  }

  noClick(){
    const name = document.getElementById('nombre') as HTMLInputElement;
    if (name.readOnly) {
      alert("No puedes editar este campo");
    }
  }

}
