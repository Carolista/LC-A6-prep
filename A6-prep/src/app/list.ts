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

    // TODO: write search method? could search by type, by keywords in title/desc/items

    // TODO: write sort method? sort a single list by items alpha or sort all lists by type?
}
