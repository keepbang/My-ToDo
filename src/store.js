import {createStore} from "redux";
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

const initToDo = toDo => {
    return {
        type:type.INIT_TODO,
        toDo
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case type.ADD_TODO:
            const id = Date.now();
            const text = action.text;
            localStorage.setItem(id,text);
            return [
                {
                    text: text,
                    id: id
                },
                ...state
            ];
        case type.DELETE_TODO:
            localStorage.removeItem(action.id);
            return state.filter(toDo => toDo.id !== action.id);
        case type.INIT_TODO:
            return [
                action.toDo,
                ...state
            ]
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
    initToDo
}

export default store;