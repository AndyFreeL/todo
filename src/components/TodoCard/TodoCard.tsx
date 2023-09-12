import React from 'react';
import style from './TodoCard.module.scss'
import {observer} from 'mobx-react-lite';
import {ITodoItem} from '../../interfaces/todoItem';
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import CompleteTodo from "../CompleteTodo/CompleteTodo";
import UpdateTodo from "../UpdateTodo/UpdateTodo";


interface TodoItemProps {
    item: ITodoItem;
}

const TodoCard = observer(({item}:TodoItemProps) => {


    return (
        <div className={style.todoCard}>
            <div className={style.todoCard__header}>
                {item.header}
                <UpdateTodo item={item}/>
            </div>
            <div className={style.todoCard__description}>
                {item.description}
            </div>
            <div className={style.todoCard__buttons}>
                <CompleteTodo item={item}/>
                <DeleteTodo id={item.id}/>
            </div>
        </div>
    );
});

export default TodoCard;