export interface ITodoItem{
    id:number;
    header:string;
    description:string;
    isDone:boolean;
}
export const enum langEnum {
    ru = "ru",
    en = "en",
}