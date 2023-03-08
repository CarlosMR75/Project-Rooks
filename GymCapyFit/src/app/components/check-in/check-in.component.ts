import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  instacanScript: HTMLScriptElement;

  constructor(private cargaScrip: CargarScriptsService) { 
    this.instacanScript = document.createElement('script');
    this.instacanScript.src = "https://rawgit.com/schmich/instascan-builds/master/instascan.min.js";
    document.body.appendChild(this.instacanScript);
    cargaScrip.cargarScr(['cam']);
  }

  ngOnInit(): void {
  }

}
