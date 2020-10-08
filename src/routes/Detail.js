import React from 'react';
import { connect } from 'react-redux';
import FormArea from '../components/FormArea';
import Header from '../components/Header';

function Detail({toDo}) {

    return (
            <>
            <Header id={toDo.id}/>
            <div style={{
                padding:"100px 20px 0px 20px"
            }}>
                <FormArea toDo={toDo} type="update"/>
            </div>
            </>
    )
}

function mapStateToProps({ToDoList},ownProps){
    const {match: {params:{id}}} = ownProps;
    return {toDo: ToDoList.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);