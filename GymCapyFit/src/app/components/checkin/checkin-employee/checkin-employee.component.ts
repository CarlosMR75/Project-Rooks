import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Calendar } from 'src/app/codes/calendar';
import Chart from 'chart.js/auto';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkin-employee',
  templateUrl: './checkin-employee.component.html',
  styleUrls: ['./checkin-employee.component.css']
})
export class CheckinEmployeeComponent implements OnInit {

  emp: any;
  @ViewChild('myChart', { static: true }) myChart!: ElementRef;
  chart!: Chart;

  private calendar!: HTMLElement;
  private prevBtn!: HTMLElement;
  private nextBtn!: HTMLElement;
  private monthTitle!: HTMLElement;
  private grid!: HTMLElement;

  private date = new Date();
  private year = this.date.getFullYear();
  private month = this.date.getMonth();
  private today = this.date.getDate();

  private asistencias = ["13-2-2023","2-2-2023","1-1-2023"];
  private faltas = ["17-2-2023","3-2-2023","1-1-2022"];
  private retardos = ["15-2-2023","8-2-2023"];


  constructor(private capyfit: GymcapyfitService, private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.capyfit.getOneEmployee(params['id']).subscribe(
      res => {
        console.log("Empleado:");
        console.log(res);
        this.emp = res;
        console.log(this.emp);
      },
      err => console.log(err)
    );
    this.capyfit.getCheckEmployee(params['id']).subscribe(
      resp=>{
        console.log("____________________");
        console.log("Check");
        console.log(resp);
      },
      err => console.error(err)
    );
  }


  ngOnInit(): void {
    this.calendar = document.querySelector('.calendar')!;
    this.prevBtn = this.calendar.querySelector('.prev-month-btn')!;
    this.nextBtn = this.calendar.querySelector('.next-month-btn')!;
    this.monthTitle = this.calendar.querySelector('.calendar-month')!;
    this.grid = this.calendar.querySelector('.calendar-grid')!;

    this.asistencias = ["13-2-2023","2-2-2023","1-1-2023"];
    this.faltas = ["17-2-2023","3-2-2023","1-1-2022"];
    this.retardos = ["15-2-2023","8-2-2023"];

    this.updateCalendar();

    this.prevBtn.addEventListener('click', () => {
      if (this.month === 0) {
        this.year--;
        this.month = 11;
      } else {
        this.month--;
      }
      this.updateCalendar();
    });

    this.nextBtn.addEventListener('click', () => {
      if (this.month === 11) {
        this.year++;
        this.month = 0;
      } else {
        this.month++;
      }
      this.updateCalendar();
    });

    this.xd();
  }

  private updateCalendar(): void {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.year, this.month, 1).getDay();

    this.monthTitle.textContent = new Date(this.year, this.month).toLocaleString('default', { month: 'long', year: 'numeric' });

    // Clear the grid
    this.grid.innerHTML = '';

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      const cell = document.createElement('div');
      cell.classList.add('calendar-day');
      this.grid.appendChild(cell);
    }

    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const cell = document.createElement('div');
      cell.classList.add('calendar-day');
      if (i === this.today && this.year === this.date.getFullYear() && this.month === this.date.getMonth()) {
        cell.classList.add('today');
      }
      let fechaCa = i + "-" + this.month + "-" + this.year;
        if (this.asistencias.includes(fechaCa)) {
           cell.classList.add('green');
        }
        if (this.faltas.includes(fechaCa)) {
           cell.classList.add('red');
        }
        if (this.retardos.includes(fechaCa)) {
           cell.classList.add('yellow');
        }
      cell.textContent = i.toString();
      this.grid.appendChild(cell);
    }

    const calendarDays = document.querySelectorAll('.calendar-day');

    calendarDays.forEach((day: Element) => {
      day.addEventListener('click', () => {
        let fecha: string = "";
        if(day.textContent){
          fecha = day.textContent + "-" + this.month + "-" + this.year;
          console.log("Fecha Seleccionada: " + fecha);
        }else {
          console.log("Fecha no válida");
        }
        //Tanto en MongoDB y JS Los meses inician en 0
      });
    });
  }

  xd(): void {
    // const calendar = new Calendar();
    // calendar.init();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../assets/css/calendar.css';
    document.head.appendChild(link);
  }

  loadChart(){
    const ctx = this.myChart.nativeElement.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Asistencias', 'Faltas', 'Retardos '],
        datasets: [{
          label: 'Registro Mensual',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}

/*import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/app/codes/calendar';

@Component({
  selector: 'app-checkin-employee',
  templateUrl: './checkin-employee.component.html',
  styleUrls: ['./checkin-employee.component.css'],
})
export class CheckinEmployeeComponent {

  constructor() {}

  ngOnInit(): void {
    const calendar = new Calendar();
    calendar.init();
  }

}*/

/*
import { Component, OnInit } from '@angular/core';
import { Calendar } from 'src/app/codes/calendar';


@Component({
  selector: 'app-checkin-employee',
  templateUrl: './checkin-employee.component.html',
  styleUrls: ['./checkin-employee.component.css']
})
export class CheckinEmployeeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const calendar = new Calendar();
    calendar.init();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../assets/css/calendar.css';
    document.head.appendChild(link);
  }

}
*/

/*import { Component, OnInit, Renderer2 } from '@angular/core';
import { Calendar } from 'src/app/codes/calendar';

@Component({
  selector: 'app-checkin-employee',
  templateUrl: './checkin-employee.component.html',
  styleUrls: ['./checkin-employee.component.css']
})
export class CheckinEmployeeComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const calendar = new Calendar();
    calendar.init();
    const style = this.renderer.createElement('style');
    style.innerHTML = `

    `;
    this.renderer.appendChild(document.head, style);
  }

}*/


/*import { Component, ViewEncapsulation } from '@angular/core';
import { Calendar } from 'src/app/codes/calendar';

@Component({
  selector: 'app-checkin-employee',
  templateUrl: './checkin-employee.component.html',
  styleUrls: ['./checkin-employee.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckinEmployeeComponent {

  constructor() {}

  ngOnInit(): void {
    const calendar = new Calendar();
    calendar.init();
  }

}*/

