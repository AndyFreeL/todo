import {makeAutoObservable} from "mobx";
import {Filter} from "../../interfaces/filter";

export class TodoFilter{
    filter: Filter = 'all';

    constructor() {
        makeAutoObservable(this);
    }

    get filtered(){
        return this.filter;
    }

    setFilter(filter:Filter){
        this.filter = filter;
    }
}