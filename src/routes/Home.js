import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import '../css/Home.scss';
import { setDraw } from '../store';

import AddBtn from '../components/AddBtn';
import FormArea from '../components/FormArea';
import { Classes, Drawer } from '@blueprintjs/core';

function Home({toDos, drawState, addToDo, setDrawState}) {

    const handleClose = () => {setDrawState({isOpen:false})};
    const handleOpen = () => {setDrawState({isOpen:true})};

    return (
        <>
            <h2 className="home_title">ToDo</h2>
            <Drawer
                icon="edit"
                onClose={handleClose}
                title="Add ToDo"
                {...drawState}
            >
                <div className={Classes.DRAWER_BODY}>
                    <div className={Classes.DIALOG_BODY}>
                        <FormArea closeFunc={handleClose}/>
                    </div>
                </div>

            </Drawer>
            <ul className="todo_ul">
                {
                    toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)
                }
            </ul>
            <AddBtn eventProps={handleOpen}/>
        </>
    )
}

function mapStateToProps(state){
    return {
        toDos: state.ToDoList,
        drawState: state.drawState
    };
}

function mapDispatchToProps(dispatch){
    return {
        setDrawState: options => dispatch(setDraw(options))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);