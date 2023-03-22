import { Component, OnInit } from '@angular/core';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  ngOnInit(): void {
    
  }

  title = 'qr-reader';
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];

  checkin = {
    IdEmpleado: 0,
    Fecha: "",
    Hora: "",
    Tipo: ""
  }

  turno?: any;

  reviewCheckIn: any;

  constructor(private checkInService: GymcapyfitService) {
    // TODO document why this constructor is empty
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  selectCamera(cameraLabel: string) {
    this.cameras.forEach(camera => {
      if (camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        console.log(camera.label);
        this.scannerEnabled = true;
      }
    })
  }

  createCheckIn(checkin) {
    console.log("Haciendo Checkin ...");
    this.checkInService.createCheckIn(checkin).subscribe(res => {
        console.log(res);
        this.openModal();
      },
        err => {
          console.log(err);
        });
  }

  scanSuccessHandler(event: string) {
    this.results.unshift(event);

    const dataEmpleado = JSON.parse(event);

    //this.checkin.IdEmpleado = dataEmpleado.IdEmpleado;
    this.checkin.IdEmpleado = dataEmpleado.IdEmpleado;
    this.checkin.Fecha = (new Date().getDate().toString() + "-" +
      new Date().getMonth().toString() + "-" +
      new Date().getFullYear().toString());
    this.checkin.Hora = (new Date().getHours().toString() + ":" + new Date().getMinutes().toString());

    this.checkInService.reviewCheckIn(this.checkin.IdEmpleado, this.checkin.Fecha).subscribe(res => {
      this.reviewCheckIn = res;
      console.log(this.reviewCheckIn);

      this.checkInService.getOneEmployee(this.checkin.IdEmpleado.toString())
      .subscribe(res => {
        this.turno = res;
        console.log(this.turno.Turno);
        if (this.turno.Turno == "Matutino" || this.turno.Turno == "Vespertino") {
          console.log("El turno es Mat o Vesp");
          if (this.reviewCheckIn == 0) {
            this.checkin.Tipo = "Entrada";
            this.createCheckIn(this.checkin);
            //this.openModal();
          } else if (this.reviewCheckIn == 1) {
            this.checkin.Tipo = "Salida";
            this.createCheckIn(this.checkin);
            //this.openModal();
          }
    
        } else if (this.turno.Turno == "Mixto") {
          if (this.reviewCheckIn == 0 || this.reviewCheckIn == 2) {
            this.checkin.Tipo = "Entrada";
            this.createCheckIn(this.checkin);
    
          } else if (this.reviewCheckIn == 1 || this.reviewCheckIn == 3) {
            this.checkin.Tipo = "Salida";
            this.createCheckIn(this.checkin);
          }
        }
      }, err => console.log(err)
      );

    },
    err => console.log(err)
    );
  }

  openModal(): void {
    this.scannerEnabled = false;
    Swal.fire({
      title: 'Registro exitoso',
      html: '<p>'+this.checkin.IdEmpleado.toString()+'</p>',
      icon: 'success',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1a1a1a',
      customClass: {
        confirmButton: 'button-modal',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Acción cuando se hace clic en el botón de confirmación
        this.scannerEnabled = true;
      }
    });

  }
}

/* 
title = 'qr-reader';
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];

  checkin = {
    IdEmpleado: 0,
    Fecha: "",
    Hora: "",
    Tipo: ""
  }

  turno: any

  reviewCheckIn: any

  constructor(private checkInService: checkInService) {
    // TODO document why this constructor is empty
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  selectCamera(cameraLabel: string) {
    this.cameras.forEach(camera => {
      if (camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        console.log(camera.label);
        this.scannerEnabled = true;
      }
    })
  }

  createCheckIn(checkin) {
    this.checkInService.createCheckIn(checkin).
      subscribe(res => {
        console.log(res);
      },
        err => {
          console.log(err);
        });
  }

  scanSuccessHandler(event: string) {
    this.results.unshift(event);

    const dataEmpleado = JSON.parse(event);

    this.checkin.IdEmpleado = 1000000012;
    this.checkin.Fecha = (new Date().getDate().toString() + "-" +
      new Date().getMonth().toString() + "-" +
      new Date().getFullYear().toString());
    this.checkin.Hora = (new Date().getHours().toString() + ":" + new Date().getMinutes().toString());

    this.checkInService.reviewCheckIn(this.checkin.IdEmpleado, this.checkin.Fecha)
      .subscribe(
        res => {
          this.reviewCheckIn = res;
        },
        err => console.log(err));

    this.checkInService.getOneEmployee(this.checkin.IdEmpleado.toString())
      .subscribe(res => {
        this.turno = res;
      },
        err => console.log(err));

    if (this.turno.Turno == "Matutino" || this.turno.Turno == "Vespertino") {
      if (this.reviewCheckIn == 0) {
        this.checkin.Tipo = "Entrada";
        this.createCheckIn(this.checkin);

      } else if (this.reviewCheckIn == 1) {
        this.checkin.Tipo = "Salida";
        this.createCheckIn(this.checkin);
      }

    } else if (this.turno.Turno == "Mixto") {
      if (this.reviewCheckIn == 0 || this.reviewCheckIn == 2) {
        this.checkin.Tipo = "Entrada";
        this.createCheckIn(this.checkin);

      } else if (this.reviewCheckIn == 1 || this.reviewCheckIn == 3) {
        this.checkin.Tipo = "Salida";
        this.createCheckIn(this.checkin);
      }
    }
  }
*/
