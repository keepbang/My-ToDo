import {createSotre, createStore} from "redux";
import {type} from "./config/actionType";

const addToDo = text => {
    return {
        type: type.ADD_TODO,
        text
    }
}

const deleteToDo = id => {
    return {
        type: type.DELETE_TODO,
        id
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case type.ADD_TODO:
            return [
                {
                    text: action.text,
                    id: Date.now()
                },
                ...state
            ];
        case type.DELETE_TODO:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;