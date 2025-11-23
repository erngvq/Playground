import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

@Component({
    selector: 'app-basic-details',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './basic-details.component.html',
    styleUrl: './basic-details.component.css'
})
export class BasicDetailsComponent {
    @Input() employee: any;
    @Input() designationList: any[] = [];
    @Input() roleList: any[] = [];
    @Output() next = new EventEmitter<void>();
}
