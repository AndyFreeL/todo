import React, {useState} from 'react';
import styles from './DeleteTodo.module.scss'
import {useStores} from "../../store/useStore";
import {ReactComponent as DeleteLogo} from "../../assets/svg/delete.svg";
import {ReactComponent as StopLogo} from "../../assets/svg/stop.svg";
import {ReactComponent as CheckedLogo} from "../../assets/svg/checked.svg";
import {langEnum} from "../../interfaces/todoItem";

interface TodoID {
    id: number;
}
const content = {
    del: {
        ru: 'удалить задачу?',
        en: 'delete Todo?',
    },
};

const DeleteTodo = ({id}:TodoID) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const todoStore = useStores().todoStore;
    const lang = useStores().locationStore.lang as keyof typeof langEnum;

    const deleteTodo=()=>{
        todoStore.deleteItem(id)
    }

    return (
        <div className={styles.deleteTodo}
             onClick={() => setShowModal(true)}>
            <div className={styles.deleteTodo__delete} ><DeleteLogo/></div>
            {showModal &&
                <div onClick={e => e.stopPropagation()} className={styles.modal}>

                    <div className={styles.modal__text}>{content.del[lang]}</div>
                    <div className={styles.modal__btns}>
                        <div onClick={() => setShowModal(false)} className={styles.modal__btn}><StopLogo/></div>
                        <div onClick={deleteTodo} className={styles.modal__btn}><CheckedLogo/></div>
                    </div>
                </div>
            }
        </div>
    );
};

export default DeleteTodo;