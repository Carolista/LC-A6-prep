import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';

@Component({
    selector: 'app-current-list',
    templateUrl: './current-list.component.html',
    styleUrls: ['./current-list.component.css']
})

export class CurrentListComponent implements OnInit {

    @Input() allLists: List[];
    @Input() currentList: List;

    editing: boolean = false;
    formIncomplete: boolean = false;

    constructor() { }

    ngOnInit() {}

    addItem(): void {
        this.currentList.items.push("");
    }
    
    saveItem(item: string, i: number): void {
        this.currentList.items[i] = item;
    }

    saveList(title: string, type: string, desc: string): void {
        if (title === '') {
            this.formIncomplete = true;
        } else {
            let updatedItems = this.currentList.items;
            this.currentList = new List(title, type, desc);
            this.currentList.items = updatedItems;
            this.formIncomplete = false;
            this.editing = false;
        }
    }

    deleteList(): void {
        if (confirm("Are you sure you want to delete this list?")) {
            this.allLists.splice(this.allLists.indexOf(this.currentList), 1);
            if (this.allLists.length > 0) {
                this.currentList = this.allLists[0];
            } else {
                this.currentList = null;
            }
        } 
    }

}
