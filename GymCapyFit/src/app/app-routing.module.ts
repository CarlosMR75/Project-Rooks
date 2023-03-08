import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './components/check-in/check-in.component';
import { RegrolComponent } from './components/regrol/regrol.component';

const routes: Routes = [
  {path: 'check', component: CheckInComponent, pathMatch: 'full'},
  {path: 'registrar', component: RegrolComponent, pathMatch: 'full'},
  {path: 'editar/:id', component: RegrolComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
