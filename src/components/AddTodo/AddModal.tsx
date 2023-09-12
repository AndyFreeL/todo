import React, {useState} from 'react';
import styles from './AddModal.module.scss'
import {observer} from 'mobx-react-lite';
import {useStores} from "../../store/useStore";
import {ReactComponent as CheckedLogo} from "../../assets/svg/checked.svg";
import {ReactComponent as StopLogo} from "../../assets/svg/stop.svg";
import cn from 'classnames';
import {langEnum} from "../../interfaces/todoItem";

const content = {
    title: {
        ru: 'Имя задачи',
        en: 'Todo title',
    },
    description:{
        ru:'Описание задачи',
        en:'Todo description'
    },
    error:{
        ru:'Имя и Описание задачи не должны быть пустыми!',
        en:'Title and Description must not be empty!'
    }
};

const AddTodo = observer(() => {
    const [title, setHeader] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const todoStore = useStores().todoStore;
    const modalStore = useStores().modalStore;
    const lang = useStores().locationStore.lang as keyof typeof langEnum;
    const [error, setError] = useState<boolean>(false);


    const Add = () => {
        if(title.length !==0 && description.length !== 0){
            setError(false)
            todoStore.addItem(title, description);
            setHeader('');
            setDescription('');
            modalStore.closeModal();
        }else {
            setError(true)
        }
    }

    return (
        <div className={styles.addUpdateModal}>
            <div className={styles.modalForm}>
                <label className={styles.modalForm__label}>{content.title[lang]}</label>
                <input className={cn(styles.modalForm__input, styles.modalForm__title,{[styles.modalForm__error]:error})}
                       type="text"
                       value={title}
                       onChange={e => setHeader(e.target.value)}/>
                <label className={styles.modalForm__label}>{content.description[lang]}</label>
                <textarea className={cn(styles.modalForm__input, styles.modalForm__description,{[styles.modalForm__error]:error})}
                          value={description}
                          onChange={e => setDescription(e.target.value)}/>
                {error && <div className={styles.modalForm__errorText}>{content.error[lang]}</div>}
                <div className={styles.modalForm__btns}>
                    <div onClick={() => modalStore.closeModal()} className={styles.modalForm__btn}><StopLogo/></div>
                    <div onClick={Add} className={styles.modalForm__btn}><CheckedLogo/></div>
                </div>

            </div>
        </div>
    );
});

export default AddTodo;