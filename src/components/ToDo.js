import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

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
        onDeleteBtn: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    };
}

export default connect(null,mapDispatchToProps)(ToDo);