import React,{useState} from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import {actionCreators} from '../store';

function Home({toDos, addToDo,initToDo}) {
    const [text,setText] = useState("");


    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addToDo(text);
        setText("");
        console.log(toDos);
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" placeholder="Write ToDo..." value={text}/>
                <button>ADD</button>
            </form>
            <ul>
                {
                    toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)
                }
            </ul>
        </>
    )
}

function mapStateToProps(state){
    return {toDos: state};
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text)),
        initToDo: toDo => dispatch(actionCreators.initToDo(toDo))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);