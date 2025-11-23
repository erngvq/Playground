import {Routes} from '@angular/router';
import {ListEmployeesComponent} from './list-employees/list-employees.component'
import {CreateEmployeeComponent} from './create-employee/create-employee.component'

export const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ListEmployeesComponent},
    {path: 'create', component: CreateEmployeeComponent},
    {path: 'create/:id', component: CreateEmployeeComponent}
];
