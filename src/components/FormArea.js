import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';

const FormArea = ({addToDo, closeFunc}) => {

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
            closeFunc();
        }
    }

    return <>
        <form onSubmit={onSubmit}>
            <input className="input__box" onChange={onChange} type="text" placeholder="Write ToDo..."/>
            <button className="input__btn">ADD</button>
        </form>
    </>
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: text => dispatch(add(text))
    };
}

export default connect(null,mapDispatchToProps)(FormArea);