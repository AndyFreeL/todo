import React, {useEffect} from 'react';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import {useStores} from './store/useStore';
import {Location} from "./store/location/getLocation";
import {observer} from "mobx-react-lite";
import AddModal from "./components/AddTodo/AddModal";
import './App.scss';

const App = observer(() => {
    const locationStore = useStores().locationStore;
    const modalStore = useStores().modalStore;

    useEffect(() => {
        Location().then((response) => locationStore.setLang(response.ip));
    });

    return (
        <div className='App'>
            <Header/>
            <TodoList/>
            {modalStore.showModal && <AddModal/>}
        </div>
    );
});

export default App;
