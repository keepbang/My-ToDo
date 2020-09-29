import React from 'react';
import { connect } from 'react-redux';

function Detail({toDo}) {
    console.log(toDo);
    return (
            <>
                <h1>
                    {toDo?.text}
                </h1>
                <h2>
                    Create at : {toDo?.id}
                </h2>
            </>
    )
}

function mapStateToProps(state,ownProps){
    const {match: {params:{id}}} = ownProps;
    return {toDo: state.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);