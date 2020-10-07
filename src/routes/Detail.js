import React from 'react';
import { connect } from 'react-redux';

function Detail({toDo}) {
    return (
            <>
                <h1>
                    title : {toDo?.title}
                </h1>
                <h3>
                    text : {toDo?.text}
                </h3>
                <h3>
                    Create at : {toDo?.id}
                </h3>
            </>
    )
}

function mapStateToProps({ToDoList},ownProps){
    const {match: {params:{id}}} = ownProps;
    return {toDo: ToDoList.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);