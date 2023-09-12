import {makeAutoObservable} from 'mobx';
import {ITodoItem} from '../../interfaces/todoItem';
import {Todos} from '../todosData';

export class TodoStore {
    todos: ITodoItem[] = Todos;

    constructor() {
        makeAutoObservable(this)
    }

    addItem(header: string, description: string) {
        this.todos.unshift({
            id: Date.now(),
            header,
            description,
            isDone: false
        })
    }

    deleteItem(id: number) {
        this.todos = this.todos.filter((i) => {
            return i.id !== id;
        })
    }

    isDoneItem(id: number) {
        this.todos = this.todos.map((i) => {
            if (i.id === id) {
                i.isDone = !i.isDone
            }
            return i
        })
    }
    updateItem(id:number, header:string, description:string){
        this.todos = this.todos.map((i) => {
            if (i.id === id) {
                i.header = header;
                i.description = description;
            }
            return i
        })
    }
}