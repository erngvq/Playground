import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Appointment} from '../classes/Appointment.model'
import {Observable} from 'rxjs'
import {ApiResponse} from '../classes/ApiResponse.model'
import {environment} from '../../../environments/environment'
import {Constants} from '../constants/Constants'

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    constructor(private http: HttpClient) {
    }

    createNewAppointment(appointment: Appointment): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(environment.api_url + Constants.API_ENDPOINT.ADD_NEW_APPOINTMENT, appointment);
    }

    getAppointmentByHospitalId(hospitalId: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(environment.api_url + Constants.API_ENDPOINT.GET_ALL_APPOINTMENTS_BY_HOSPITAL_ID + hospitalId);
    }
}
