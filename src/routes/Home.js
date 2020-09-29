import React,{useState} from 'react';
import { connect } from 'react-redux';
import {addToDo} from '../store';

function Home({toDos}) {
    const [text,setText] = useState("");

    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="Write ToDo..." value={text}/>
                <button>ADD</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </>
    )
}

function mapStateToProps(state){
    return {toDos: state};
}

function mapDispatchToProps(dispatch){
    return {
        dispatchAddToDo
    }
}

export default connect(null,mapDispatchToProps)(Home);