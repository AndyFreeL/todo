import {makeAutoObservable, runInAction} from "mobx";
import {Country} from "./getLocation";

export class LocationStore {
    lang = 'en';

    constructor() {
        makeAutoObservable(this);
    }

    setLang(ip: string) {
        Country(ip).then((country) => {
            runInAction(()=>this.lang = country === "RU" ? "ru" : "en")
        });
    }

}