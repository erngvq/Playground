import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {User} from './core/classes/User.model'
import {FormsModule} from '@angular/forms'
import {HospitalService} from './core/services/hospital.service'
import {ApiResponse} from './core/classes/ApiResponse.model'
import {Hospital} from './core/classes/Hospital.model'
import {CommonModule} from '@angular/common'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FormsModule, CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public user: User = new User();
    public loggedHospitalData: Hospital = new Hospital();

    constructor(private hospitalService: HospitalService, private router: Router) {
        const loggedData = localStorage.getItem('loginData');
        if (loggedData != null) {
            this.loggedHospitalData = JSON.parse(loggedData);
        }
    }

    showLogin() {
        const modal = document.getElementById('loginModal');

        if (modal != null) {
            modal.style.display = 'block';
        }
    }

    closeLogin() {
        const modal = document.getElementById('loginModal')

        if (modal != null) {
            modal.style.display = 'none';
        }
    }

    onLogin() {
        this.hospitalService.login(this.user).subscribe({
            next: (res: ApiResponse) => {
                if (res.result) {
                    this.loggedHospitalData = res.data;
                    localStorage.setItem('loginData', JSON.stringify(res.data))
                    this.closeLogin();
                } else {
                    alert(res.message);
                }
            },
            error: (error) => {
                alert(JSON.stringify(error));
            }
        });
    }

    logout() {
        localStorage.removeItem('loginData');
        this.loggedHospitalData = new Hospital();
        void this.router.navigate(['/home']);
    }
}
