import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAppointmentComponent} from './app.component';
import { ScheduleAppointmentComponent} from './ScheduleAppointment/scheduleAppointment'

const routes: Routes = [
{ path: 'users/:memberId', component: ListAppointmentComponent },
  { path:'add',component:ScheduleAppointmentComponent},
 { path:'edit/:id/:memberId',component:ScheduleAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

