import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDraw, toDoRefresh } from '../store';
import '../css/Home.scss';

import AddBtn from '../components/AddBtn';
import FormArea from '../components/FormArea';
import Header from '../components/Header';
import ToDo from '../components/ToDo';

import {dateToString} from '../common/dateToString';

import { Button, Classes, Drawer } from '@blueprintjs/core';

function Home({toDos, drawState, setDrawState, onToDoRefresh}) {

    useEffect(() => {
        onToDoRefresh();
    }, [onToDoRefresh])

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

    const sendToDo = state.ToDoList.filter(toDo => state.date.substr(0,10) === dateToString(new Date(parseInt(toDo.id))).substr(0,10));

    return {
        toDos: sendToDo,
        drawState: state.drawState
    };
}

function mapDispatchToProps(dispatch){
    return {
        setDrawState: options => dispatch(setDraw(options)),
        onToDoRefresh: () => dispatch(toDoRefresh())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);