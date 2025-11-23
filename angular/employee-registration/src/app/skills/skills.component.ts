import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css'
})
export class SkillsComponent {
    @Input() employee: any;
    @Output() next = new EventEmitter<void>();

    addSkill() {
        this.employee.erpEmployeeSkills.push({
            skill: '',
            totalYearExp: 0,
            lastVersionUsed: ''
        });
    }

    removeSkill(index: number) {
        this.employee.erpEmployeeSkills.splice(index, 1);
    }
}
