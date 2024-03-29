import { Component } from '@angular/core';
import { CargarScriptsService } from './services/cargar-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pruebas';

  constructor(private cargaScrip: CargarScriptsService) { 
    cargaScrip.cargarScr(['instacan']);
  }
}
