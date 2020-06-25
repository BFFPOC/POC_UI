import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../service/api.service";
@Component({
  selector: 'schedule-Appointment',
  templateUrl: './scheduleAppointment.html',
  styleUrls: ['./scheduleAppointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {
  public userId: any;
  public memberId: any;
  public buttonText = 'Add';
  public EditForm = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  addForm: FormGroup
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      appointmentSlot: ['', Validators.required],
      memberId: ['', Validators.required],
      facilityId: ['', Validators.required]

    })
    if (this.route.snapshot.paramMap.get('id')) {
      this.buttonText = 'Reschedule'
      this.userId = this.route.snapshot.paramMap.get('id');
      this.memberId = this.route.snapshot.paramMap.get('memberId');

      this.apiService.getAppointments(this.memberId).subscribe(data => {
        data.map((item) => {
          if (item.id == this.userId) {
            this.addForm.patchValue({
              appointmentSlot: item.appointmentSlot,
              memberId: item.memberId,
              facilityId: item.facilityId
            });
          }
        })
        this.EditForm = true;
      })
    }
  }

  onSubmit() {
    if (this.userId) {
      this.apiService.updateAppointment(this.addForm.value, this.userId).subscribe(data => {
        if (data.statusCode != 200) {
          alert(data.Message);
        } else {
          alert("Rescheduled Successfully");
          this.router.navigate(['users', this.memberId]);
        }
      })
    } else {
      this.apiService.addAppointment(this.addForm.value).subscribe(response => {
        if (response.statusCode != 200) {
          alert(response.Message);
        } else {
          alert("Scheduled Successfully");
          this.router.navigate(['users', this.addForm.value.memberId]);
        }
      })
    }

  }

}
