import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from "classnames";

import { remove,check } from '../store';

import '../css/ToDo.scss';
import { Button, Checkbox } from '@blueprintjs/core';

function ToDo({id,title,checked, onDeleteBtn, onChecked}) {

    const onChangeHandler = (e) => {
        onChecked({id,checked:e.target.checked})
    }

    const titleClass = classNames(
        'todo___text',
        (checked?'disabled':'enabled')
    )

    const setDate = (id) => {
        let date = new Date(parseInt(id));
        let formatDate = date.getFullYear() + "-" + 
                        String(date.getMonth() + 1).padStart(2,'0') + "-" + 
                        String(date.getDate()).padStart(2,'0') + " " +
                        String(date.getHours()).padStart(2,'0') + ":" +
                        String(date.getMinutes()).padStart(2,'0') + ":" +
                        String(date.getSeconds()).padStart(2,'0');

        return formatDate;
    }
    
    return(
        <li id={id} className="todo__li">
            <Checkbox className="todo___check" checked={(typeof checked === "undefined"?false:checked)} onChange={onChangeHandler} large={true}/>
                <Link className={titleClass} to={checked?`/#`:`/${id}`}>
                    {title}
                    <div className="todo___date">{setDate(id)}</div>
                </Link>
            <div className="btn__area">
                <Button onClick={onDeleteBtn} fill={true} className="del___btn" icon="trash" intent="danger"/>
            </div>
        </li>
    )
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        onDeleteBtn: () => dispatch(remove(ownProps.id)),
        onChecked: (obj) => dispatch(check(obj))
    };
}

export default connect(null,mapDispatchToProps)(ToDo);