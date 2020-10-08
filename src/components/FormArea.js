import { Button, Divider, EditableText, H3 } from '@blueprintjs/core';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { add, update } from '../store';
import '../css/FormArea.scss';
import { INTENT_PRIMARY } from '@blueprintjs/core/lib/esm/common/classes';
import { useHistory } from 'react-router-dom';

const FormArea = ({addToDo,updateToDo, closeFunc, toDo, type}) => {

    const [text,setText] = useState("");
    const [title, setTitle] = useState("");
    const history = useHistory();

    useEffect(() => {
        if(typeof toDo !== "undefined" && type === "update"){
            setTitle(toDo.title);
            setText(toDo.text);
        }
        
    }, [type,toDo])

    function onChangeText(value){
        setText(value);
    }

    function onChangeTitle(value){
        setTitle(value);
    }

    function onSubmit(e){
        e.preventDefault();
        if(title === ""){
            alert("Title을 입력해주세요");
            return;
        }
        if(type === "update" && typeof closeFunc !== "function"){
            updateToDo({title, text,id: toDo.id});
            history.push('/');
        }else{
            addToDo({title,text});
            closeFunc();
        }
    }

    return <>
        <form onSubmit={onSubmit} className="form_area">
            <H3>
                <EditableText
                    alwaysRenderInput={true}
                    intent={INTENT_PRIMARY}
                    maxLength={100}
                    placeholder="Write title..."
                    value={title}
                    onChange={onChangeTitle}
                />
            </H3>
            <Divider />
            <EditableText
                    alwaysRenderInput={true}
                    intent={INTENT_PRIMARY}
                    maxLines={7}
                    minLines={5}
                    multiline={true}
                    placeholder="Write ToDo..."
                    onChange={onChangeText}
                    value={text}
                />
            <Divider />
            <div className="add_btn_area">
                <Button
                    className="add__btn"
                    type="submit"
                    icon={typeof closeFunc === "function"?"add":"changes"}
                    intent={typeof closeFunc === "function"?"success":"primary"}
                    text={typeof closeFunc === "function"?"ADD":"UPDATE"}
                />
            </div>
        </form>
    </>
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: (obj) => dispatch(add(obj)),
        updateToDo: (obj) => dispatch(update(obj))
    };
}

export default connect(null,mapDispatchToProps)(FormArea);