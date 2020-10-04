import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';

function ToDo({text,id, onDeleteBtn}) {
    return(
        <li id={id}>
            <Link to={`/${id}`}>
                {text} 
            </Link>
            <button onClick={onDeleteBtn}>DEL</button>
        </li>
    )
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        onDeleteBtn: () => dispatch(remove(ownProps.id))
    };
}

export default connect(null,mapDispatchToProps)(ToDo);