import {Component, OnDestroy} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Hospital} from '../../core/classes/Hospital.model'
import {HospitalService} from '../../core/services/hospital.service'
import {ApiResponse} from '../../core/classes/ApiResponse.model'
import {Subscription} from 'rxjs'

@Component({
    selector: 'app-new-hospital',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-hospital.component.html',
    styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent implements OnDestroy {

    private subscriptions: Subscription[] = [];

    public hospital: Hospital = new Hospital();

    constructor(private hospitalService: HospitalService) {
    }

    onRegister() {
        this.subscriptions.push(
            this.hospitalService.registerHospital(this.hospital).subscribe({
                next: (res: ApiResponse) => {
                    if (res.result) {
                        alert('Registration Success');
                    } else {
                        alert(res.message);
                    }
                },
                error: (error) => {
                    alert(JSON.stringify(error));
                }
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
