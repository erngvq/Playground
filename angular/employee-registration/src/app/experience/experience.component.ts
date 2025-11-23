import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    @Input() employee: any;
    @Output() save = new EventEmitter<any>();

    addExperience() {
        this.employee.ermEmpExperiences.push({
            companyName: '',
            startDate: '',
            endDate: '',
            designation: '',
            projectsWorkedOn: ''
        });
    }

    removeExperience(index: number) {
        this.employee.ermEmpExperiences.splice(index, 1);
    }
}
