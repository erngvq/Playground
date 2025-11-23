import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import {CommonModule} from '@angular/common'

@Component({
    selector: 'app-list-employees',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './list-employees.component.html',
    styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit {
    employeeList: any[] = [];

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
        this.loadAllEmployees();
    }

    loadAllEmployees() {
        this.http
            .get('http://127.0.0.1:8000/employees')
            .subscribe((res: any) => {
                this.employeeList = res;
            });
    }

    addNew() {
        this.router.navigate(['/create']);
    }

    onEdit(id: number) {
        this.router.navigate(['/create', id]);
    }

    onDelete(id: number) {
        const isDelete = confirm('Are you sure you want to delete?');
        if (isDelete) {
            this.http
                .delete(`http://127.0.0.1:8000/employee/${id}`)
                .subscribe((res: any) => {
                    if (res.result) {
                        alert('Employee deleted successfully!');
                        this.loadAllEmployees();
                    } else {
                        alert('Error deleting employee');
                    }
                });
        }
    }
}
