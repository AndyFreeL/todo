import React, {useState} from 'react';
import styles from './CompleteTodo.module.scss'
import {useStores} from "../../store/useStore";
import {ReactComponent as CheckedLogo} from "../../assets/svg/checked.svg";
import {ReactComponent as StopLogo} from "../../assets/svg/stop.svg";
import {ITodoItem, langEnum} from "../../interfaces/todoItem";
import cn from 'classnames';

interface TodoItemProps {
    item: ITodoItem;
}
const content = {
    change: {
        ru: 'изменить статус выполнения?',
        en: 'change Todo status?',
    },
};

const CompleteTodo = ({item}:TodoItemProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const todoStore = useStores().todoStore;
    const lang = useStores().locationStore.lang as keyof typeof langEnum;

    const completeTodo = () => {
        todoStore.isDoneItem(item.id)
        setShowModal(false)
    }

    return (
        <div className={styles.completeTodo}
             onClick={() => setShowModal(true)}>

            <div className={cn(styles.completeTodo__logo, {[styles.completeTodo__completed]: item.isDone})}><CheckedLogo/></div>

            {showModal &&
                <div onClick={e => e.stopPropagation()} className={styles.modal}>

                    <div className={styles.modal__text}>{content.change[lang]}</div>
                    <div className={styles.modal__btns}>
                        <div onClick={() => setShowModal(false)} className={styles.modal__btn}><StopLogo/></div>
                        <div onClick={completeTodo} className={styles.modal__btn}><CheckedLogo/></div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CompleteTodo;