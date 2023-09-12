import {TodoStore} from './todos'
import {ModalStore} from './modal'
import {LocationStore} from './location'
import {TodoFilter} from "./filter";

export enum StoresEnum {
    todoStore = 'todoStore',
    modalStore = 'modalStore',
    locationStore = 'locationStore',
    todoFilter = 'todoFilter'
}

export class RootStore {
    todoStore: TodoStore;
    modalStore: ModalStore;
    locationStore: LocationStore;
    todoFilter: TodoFilter;

    constructor() {
        this.todoStore = new TodoStore();
        this.modalStore = new ModalStore();
        this.locationStore = new LocationStore();
        this.todoFilter = new TodoFilter();
    }
}

export const stores = new RootStore();