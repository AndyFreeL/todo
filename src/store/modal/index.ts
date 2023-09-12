import {makeAutoObservable} from "mobx";

export class ModalStore{
    showModal:boolean = false;

    constructor() {
        makeAutoObservable(this);
    }
    openModal(){
        this.showModal = true;
    }
    closeModal(){
        this.showModal = false;
    }
}