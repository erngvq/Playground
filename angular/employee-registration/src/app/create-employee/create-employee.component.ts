import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ActivatedRoute, Router} from '@angular/router'
import {BasicDetailsComponent} from '../basic-details/basic-details.component'
import {SkillsComponent} from '../skills/skills.component'
import {ExperienceComponent} from '../experience/experience.component'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

@Component({
    selector: 'app-create-employee',
    standalone: true,
    imports: [CommonModule, FormsModule, BasicDetailsComponent, SkillsComponent, ExperienceComponent],
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
    // Stepper and progress bar properties
    stepsList: any [] = [
        {stepName: 'Basic Details', isComplete: false},
        {stepName: 'Skills', isComplete: false},
        {stepName: 'Experience', isComplete: false}
    ];

    activeStep = this.stepsList[0];
    stepperCompletionValue = 15;

    // Employee data object
    employeeObj = {
        empId: 0,
        empName: '',
        empEmail: '',
        empPhoneNumber: '',
        empDesignation: '',
        empRole: '',
        erpEmployeeSkills: [],
        ermEmpExperiences: []
    };

    designationList: any[] = [];
    roleList: any[] = [];

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
        const empId = this.route.snapshot.params['id'];
        if (empId) {
            this.loadEmployee(empId);
        }
        this.loadRoles();
        this.loadDesignations();
    }

    loadEmployee(empId: number) {
        this.http
            .get(`http://127.0.0.1:8000/employee/${empId}`)
            .subscribe((res: any) => {
                this.employeeObj.empId = res.id;
                this.employeeObj.empName = res.name;
                this.employeeObj.empEmail = res.email;
                this.employeeObj.empPhoneNumber = res.phone_number;
                this.employeeObj.empDesignation = res.designation_name;
                this.employeeObj.empRole = res.role_name;
            });
    }

    loadRoles() {
        this.http
            .get(`http://127.0.0.1:8000/designations`)
            .subscribe((res: any) => {
                this.designationList = res;
            });
    }

    loadDesignations() {
        this.http
            .get(`http://127.0.0.1:8000/roles`)
            .subscribe((res: any) => {
                this.roleList = res;
            });
    }

    setActiveStep(step: any) {
        this.activeStep = step;
        this.updateProgress(step);
    }

    goToSkills() {
        this.stepsList[0].isComplete = true;
        this.activeStep = this.stepsList[1];
        this.updateProgress(this.stepsList[1]);
    }

    goToExperience() {
        this.stepsList[1].isComplete = true;
        this.activeStep = this.stepsList[2];
        this.updateProgress(this.stepsList[2]);
    }

    updateProgress(step: any) {
        if (step.stepName === 'Basic Details') {
            this.stepperCompletionValue = 15;
        } else if (step.stepName === 'Skills') {
            this.stepperCompletionValue = 55;
        } else {
            this.stepperCompletionValue = 100;
        }
    }

    saveEmployee(employee: any) {
        // Transform the employee object to include roleId and designationId
        const payload = {
            'name': employee.empName,
            'email': employee.empEmail,
            'phone_number': employee.empPhoneNumber,
            'designation_id': this.getDesignationId(employee.empDesignation),
            'role_id': this.getRoleId(employee.empRole)
        }

        console.log('Payload:', payload);

        if (employee.empId) {
            // Update existing employee
            this.http
                .put(`http://127.0.0.1:8000/employee/${employee.empId}`, payload)
                .subscribe((res: any) => {
                    console.log('Employee updated successfully:', res);
                    alert('Employee updated successfully!');
                    this.goToList();
                });
        } else {
            // Create new employee
            this.http
                .post(`http://127.0.0.1:8000/employee`, payload)
                .subscribe((res: any) => {
                    console.log('Employee created successfully:', res);
                    alert('Employee created successfully!');
                    this.goToList();
                });
        }
    }

    goToList() {
        this.router.navigate(['/list']);
    }

    getRoleId(roleName: string): number | undefined {
        const role = this.roleList.find((r) => r.name === roleName);
        return role ? role.id : undefined;
    }

    getDesignationId(designationName: string): number | undefined {
        const designation = this.designationList.find((d) => d.name === designationName);
        return designation ? designation.id : undefined;
    }
}
