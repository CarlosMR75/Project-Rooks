import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './components/check-in/check-in.component';
import { CheckinEmployeeComponent } from './components/checkin/checkin-employee/checkin-employee.component';
import { ControlCheckinComponent } from './components/checkin/control-checkin/control-checkin.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EmployeesListComponent } from './components/employee/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home.component';
import { RegrolComponent } from './components/regrol/regrol.component';
import { RegistrarRolComponent } from './components/roles/registrar-rol/registrar-rol.component';
import { RolListComponent } from './components/roles/rol-list/rol-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'check', component: CheckInComponent, pathMatch: 'full'},
  {path: 'control-check', component: ControlCheckinComponent, pathMatch: 'full'},
  {path: 'check-employee', component: CheckinEmployeeComponent, pathMatch: 'full'},
  {path: 'check-employee/:id', component: CheckinEmployeeComponent, pathMatch: 'full'},
  {path: 'employees', component: EmployeesListComponent, pathMatch: 'full'},
  {path: 'add', component: AddEmployeeComponent, pathMatch: 'full'},
  {path: 'control-rol', component: RolListComponent, pathMatch: 'full'},
  {path: 'registrar-rol', component: RegistrarRolComponent, pathMatch: 'full'},
  {path: 'registrar', component: RegrolComponent, pathMatch: 'full'},
  {path: 'editar/:id', component: RegrolComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
