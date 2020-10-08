import React from 'react';
import { connect } from 'react-redux';
import { setDraw } from '../store';
import '../css/Home.scss';

import AddBtn from '../components/AddBtn';
import FormArea from '../components/FormArea';
import Header from '../components/Header';
import ToDo from '../components/ToDo';

import {dataToString} from '../common/dateToString';

import { Button, Classes, Drawer } from '@blueprintjs/core';

function Home({toDos, drawState, setDrawState}) {

    const handleClose = () => {setDrawState({isOpen:false})};
    const handleOpen = () => {setDrawState({isOpen:true})};

    return (
        <>
            <Header/>
            <Drawer
                icon="annotation"
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
            {toDos.length === 0?
                    <div className="empty_page">
                        <Button onClick={handleOpen} icon="plus" intent="success" text="Add frist To-Do" large="true"/>
                    </div>:
                    <ul className="todo_ul">
                    {
                        toDos.map(
                            toDo => <ToDo key={toDo.id} {...toDo}/> 
                        )
                    }
                </ul>
                }
            
            <AddBtn eventProps={handleOpen}/>
        </>
    )
}

function mapStateToProps(state){

    const sendToDo = state.ToDoList.filter(toDo => state.date === dataToString(new Date(parseInt(toDo.id))));

    return {
        toDos: sendToDo,
        drawState: state.drawState
    };
}

function mapDispatchToProps(dispatch){
    return {
        setDrawState: options => dispatch(setDraw(options))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);