import { Button, EditableText, H3 } from '@blueprintjs/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';
import '../css/FormArea.scss';
import { INTENT_PRIMARY } from '@blueprintjs/core/lib/esm/common/classes';

const FormArea = ({addToDo, closeFunc}) => {

    const [text,setText] = useState("");
    const [title, setTitle] = useState("");

    function onChangeText(value){
        setText(value);
    }

    function onChangeTitle(value){
        setTitle(value);
    }

    function onSubmit(e){
        e.preventDefault();
        if(text === ""){
            alert("아무것도 입력하지 않았습니다.");
        }else{
            addToDo({title,text});
            setText("");
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
                    placeholder="Edit title..."
                    value={title}
                    onChange={onChangeTitle}
                />
            </H3>
            <EditableText
                    alwaysRenderInput={true}
                    intent={INTENT_PRIMARY}
                    maxLines={12}
                    minLines={3}
                    multiline={true}
                    placeholder="Write ToDo..."
                    onChange={onChangeText}
                    value={text}
                />
            {/* <TextArea style={{resize:"none"}} fill={true} growVertically={true} onChange={onChange} value={text} large={true} placeholder="Write ToDo..."/> */}
            <Button className="add__btn" type="submit" icon="add" intent="success" text="ADD" />
        </form>
    </>
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: (obj) => dispatch(add(obj))
    };
}

export default connect(null,mapDispatchToProps)(FormArea);