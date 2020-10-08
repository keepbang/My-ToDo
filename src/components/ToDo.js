import { Button } from '@blueprintjs/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';
import '../css/ToDo.scss';

function ToDo({id,title, onDeleteBtn}) {
    return(
        <li id={id} className="todo__li">
            <Link to={`/${id}`}>
                <div className="todo___text">{title}</div>
            </Link>
            <div className="btn__area">
                <Button onClick={onDeleteBtn} fill={true} className="del___btn" icon="trash" intent="danger"/>
            </div>
        </li>
    )
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        onDeleteBtn: () => dispatch(remove(ownProps.id))
    };
}

export default connect(null,mapDispatchToProps)(ToDo);