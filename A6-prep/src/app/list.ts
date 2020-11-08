export class List {

    title: string;
    type: string;
    desc: string;
    items: string[];

    constructor(title: string, type: string, desc: string) {
        this.title = title;
        this.type = type;
        this.desc = desc;
        this.items = []; // always initialized to empty array
    }

    // I initially was planning to add search and sort functionality to the app but ran out of time - I may still go back and do it later.

}
