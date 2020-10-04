import React,{useState} from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import {add} from '../store';

function Home({toDos, addToDo}) {
    const [text,setText] = useState("");


    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        console.log(text);
        if(text === ""){
            alert("아무것도 입력하지 않았습니다.");
        }else{
            addToDo(text);
            setText("");
        }
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
        addToDo: text => dispatch(add(text))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);