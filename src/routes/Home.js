import React,{useState} from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import '../css/Home.scss';
import { add } from '../store';

import AddBtn from '../components/AddBtn';
import FormArea from '../components/FormArea';
import { Classes, Drawer } from '@blueprintjs/core';

function Home({toDos, addToDo, setDrawState}) {
    console.log(setDrawState);
    const [text,setText] = useState("");
    

    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        if(text === ""){
            alert("아무것도 입력하지 않았습니다.");
        }else{
            addToDo(text);
            setText("");
        }
    }

    const handleClose = () => {setDrawState({isOpen:false})};
    const handleOpen = () => {setDrawState({isOpen:true})};

    return (
        <>
            <h2 className="home_title">ToDo</h2>
            {/* <Drawer
                icon="info-sign"
                onClose={handleClose}
                title="Add ToDo"
            >
                <div className={Classes.DRAWER_BODY}>
                    <div className={Classes.DIALOG_BODY}>
                        test
                    </div>
                </div>

            </Drawer> */}
                <form onSubmit={onSubmit}>
                    <input className="input__box" onChange={onChange} type="text" placeholder="Write ToDo..." value={text}/>
                    <button className="input__btn">ADD</button>
                </form>
            <ul>
                {
                    toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)
                }
            </ul>
            <AddBtn onClick={handleOpen}/>
        </>
    )
}

function mapStateToProps(state){
    console.log(state);
    return {toDos: state.ToDoList};
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: text => dispatch(add(text)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);