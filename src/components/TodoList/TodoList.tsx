import React from 'react';
import style from './TodoList.module.scss'
import TodoCard from '../TodoCard/TodoCard';
import {observer} from 'mobx-react-lite';
import {useStores} from '../../store/useStore';

const TodoList = observer(() => {
    const todos = useStores().todoStore.todos
    const filterStore = useStores().todoFilter;

    const filteredTodoList = () => {
        switch (filterStore.filter) {
            case 'active':
                return todos.filter((todo) => !todo.isDone)
                    .map((item) => (<TodoCard key={item.id} item={item}/>))
            case 'done':
                return todos.filter((todo) => todo.isDone)
                    .map((item) => (<TodoCard key={item.id} item={item}/>))
            default:
                return todos.map((item) => (<TodoCard key={item.id} item={item}/>))
        }
    }

    return (
        <div className={style.todoList}>
            {filteredTodoList()}
        </div>
    );
});


export default TodoList;