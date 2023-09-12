import React from 'react';
import styles from './TodoFilter.module.scss'
import {useStores} from "../../store/useStore";
import {langEnum} from "../../interfaces/todoItem";
import {observer} from "mobx-react-lite";

const content = {
    all: {
        ru: "все задачи",
        en: "all todos",
    },
    done: {
        ru: "завершенные задачи",
        en: "completed todos",
    },
    active: {
        ru: "активные задачи",
        en: "active todos",
    },
};

const TodoFilter = observer(() => {
    const filterStore = useStores().todoFilter;
    const lang = useStores().locationStore.lang as keyof typeof langEnum;

    const changeFilter = () => {
        switch (filterStore.filter) {
            case 'all':
                filterStore.setFilter('done')
                break;
            case 'done':
                filterStore.setFilter('active')
                break;
            default:
                filterStore.setFilter('all')
        }
    }

    return (
        <div onClick={changeFilter} className={styles.filter}>
            {content[filterStore.filter][lang]}
        </div>
    );
});

export default TodoFilter;