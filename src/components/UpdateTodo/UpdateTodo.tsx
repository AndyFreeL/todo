import React, {useState} from 'react';
import styles from './UpdateTodo.module.scss'
import {ReactComponent as CheckedLogo} from "../../assets/svg/checked.svg";
import {ReactComponent as StopLogo} from "../../assets/svg/stop.svg";
import {ReactComponent as UpdateLogo} from "../../assets/svg/pen.svg";
import cn from "classnames";
import {ITodoItem} from "../../interfaces/todoItem";
import {useStores} from "../../store/useStore";
import {observer} from "mobx-react-lite";

interface TodoItemProps {
    item: ITodoItem;
}

const UpdateTodo = observer(({item}: TodoItemProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [title, setHeader] = useState<string>(item.header);
    const [description, setDescription] = useState<string>(item.description);
    const todoStore = useStores().todoStore;


    const updateTodo = () => {
        todoStore.updateItem(item.id, title, description)
        setShowModal(false)
    }

    return (
        <div onClick={() => setShowModal(true)} className={styles.update}>
            <UpdateLogo/>
            {showModal &&
                <div onClick={e => e.stopPropagation()} className={styles.modal}>

                    <input className={cn(styles.modal__input, styles.modal__title)}
                           type="text"
                           value={title}
                           onChange={e => setHeader(e.target.value)}/>
                    <textarea className={cn(styles.modal__input, styles.modal__description)}
                              value={description}
                              onChange={e => setDescription(e.target.value)}/>

                    <div className={styles.modal__btns}>
                        <div onClick={() => setShowModal(false)} className={styles.modal__btn}><StopLogo/></div>
                        <div onClick={updateTodo} className={styles.modal__btn}><CheckedLogo/></div>
                    </div>
                </div>
            }
        </div>
    );
});

export default UpdateTodo;