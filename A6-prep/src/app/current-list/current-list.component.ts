import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';

@Component({
    selector: 'app-current-list',
    templateUrl: './current-list.component.html',
    styleUrls: ['./current-list.component.css']
})
export class CurrentListComponent implements OnInit {

    @Input() currentList: List;
    constructor() { }

    ngOnInit() {
    }

}
