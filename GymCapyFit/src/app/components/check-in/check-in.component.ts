import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  instacanScript: HTMLScriptElement;
  //cam: cam;

  

  constructor(private cargaScrip: CargarScriptsService, private gymService:GymcapyfitService) { 
    //this.instacanScript = document.createElement('script');
    //this.instacanScript.src = "https://rawgit.com/schmich/instascan-builds/master/instascan.min.js";
    //document.body.appendChild(this.instacanScript);
    //cargaScrip.cargarScr(['cam']);
  }

  public cameras:MediaDeviceInfo[]=[];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled=false;
  public results:string[]=[];

  camerasFoundHandler(cameras: MediaDeviceInfo[]){
    this.cameras=cameras;
    this.selectCamera(this.cameras[0].label);
  }

  scanSuccessHandler(event:string){
    console.log(event);
    this.results.unshift(event);
    const objetoJSON = JSON.parse(event);
    console.log(objetoJSON);
  }

  selectCamera(cameraLabel: string){    
    this.cameras.forEach(camera=>{
      if(camera.label.includes(cameraLabel)){
        this.myDevice=camera;
        console.log(camera.label);
        this.scannerEnabled=true;
      }
    })    
  }

  ngOnInit(): void {
    const objeto = {
      IdEmpleado: 122,
      Fecha: "30/10/2022",
      Hora: 'Dios',
      Tipo: "Entrada",
    };
    
    const objetoJSON = JSON.stringify(objeto);
    console.log("Obj: "+objetoJSON);
    this.gymService.getAllCheckIn().subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
