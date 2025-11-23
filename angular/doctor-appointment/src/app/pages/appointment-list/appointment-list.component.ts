import {Component, OnInit} from '@angular/core';
import {Appointment} from '../../core/classes/Appointment.model'
import {FormsModule} from '@angular/forms'
import {AppointmentService} from '../../core/services/appointment.service'
import {ApiResponse} from '../../core/classes/ApiResponse.model'

@Component({
    selector: 'app-appointment-list',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './appointment-list.component.html',
    styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

    appointment: Appointment = new Appointment();
    appointmentList: Appointment[] = [];

    constructor(private appointmentService: AppointmentService) {
        const loggedData = localStorage.getItem('loginData');
        if (loggedData != null) {
            this.appointment.hospitalId = JSON.parse(loggedData).hospitalId;
        }
    }

    ngOnInit() {
        this.getAppointments();
    }

    bookAppointment() {
        this.appointmentService.createNewAppointment(this.appointment).subscribe({
            next: (res: ApiResponse) => {
                if (res.result) {
                    alert('Appointment created successfully');
                    this.getAppointments();
                } else {
                    alert(res.message);
                }
            },
            error: (error) => {
                alert(JSON.stringify(error));
            }
        });
    }

    getAppointments() {
        this.appointmentService.getAppointmentByHospitalId(this.appointment.hospitalId).subscribe({
            next: (res: ApiResponse) => {
                if (res.result) {
                    this.appointmentList = res.data;
                } else {
                    alert(res.message);
                }
            },
            error: (error) => {
                alert(JSON.stringify(error));
            }
        });
    }
}
