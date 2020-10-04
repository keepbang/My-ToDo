import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const initToDo = createAction("INIT");

// const reducer = (state = [], action) => {
//     switch(action.type){
//         case addToDo.type:
//             const id = Date.now();
//             const text = action.payload;
//             return [
//                 {
//                     text: text,
//                     id: id
//                 },
//                 ...state
//             ];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         case initToDo.type:
//             return [
//                 action.toDo,
//                 ...state
//             ]
//         default:
//             return state;
//     }
// }

const reducer = createReducer([],{
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now()});
    },
    [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
});

const store = configureStore({reducer});

export const actionCreators = {
    addToDo,
    deleteToDo,
    initToDo
}

export default store;