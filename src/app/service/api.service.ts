import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointments } from '../model/Appointment.model';
import { Observable } from 'rxjs/index';
import { inject } from '@angular/core/testing';
import { TokenInfo } from '../model/api.response'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private gttokendata: TokenInfo) { }
    PostUrl="https://schedule-appt-jwt.azurewebsites.net/schedule"
    URl = 'http://localhost:3000/Appointment/';
    cancelUrl = 'http://localhost:3000/cancelAppointment/';







    getAppointments(memberId: any): Observable<any> {
        return this.http.get<any>(this.URl + memberId)
    }

    addAppointment(Appointment): Observable<any> {
        let body = {
            "memberId": Appointment.memberId,
            "appointmentSlot": Appointment.appointmentSlot,
            "facilityId": Appointment.facilityId
        };
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.gttokendata.provideToken(Appointment.memberId),//222204
            "X-correlationid": '2342342',
        });

        return this.http.post<any>(this.PostUrl, body, { headers: headers })

    }
    updateAppointment(Appointment, id): Observable<any> {
        let body = {
            "id": id,
            "appointmentSlot": Appointment.appointmentSlot,
            "memberId":Appointment.memberId
        };
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.gttokendata.provideToken(Appointment.memberId),
            "X-correlationid": '2342342',
        });
        return this.http.put<any>(this.URl, body, { headers: headers })

    }
    deleteAppointment(id: any, memberId): Observable<any> {
        let body = {
            "id": id,
            "memberId": memberId,
        };
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.gttokendata.provideToken(memberId),
            "X-correlationid": '2342342',
        });
        return this.http.put<any>(this.cancelUrl, body, { headers: headers })

    }

}