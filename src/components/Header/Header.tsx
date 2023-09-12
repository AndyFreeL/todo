import React from 'react';
import styles from './Header.module.scss'
import {useStores} from "../../store/useStore";
import {observer} from "mobx-react-lite";
import {ReactComponent as PlusLogo} from "../../assets/svg/plus.svg";
import TodoFilter from "../TodoFilter/TodoFilter";

const Header = observer(() => {
    const modalStore = useStores().modalStore;
    const lang = useStores().locationStore.lang

    const openModal = () => {
        modalStore.openModal()
    }

    return (
        <div className={styles.header}>
            <TodoFilter/>
            <div className={styles.header__add} onClick={openModal}><PlusLogo/></div>
            <div className={styles.header__lang}>{lang}</div>
        </div>
    );
});

export default Header;