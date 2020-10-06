import { Position } from "@blueprintjs/core";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const storageKey = "Keepbang.ToDo.Storage";

const initState = () => {
    return JSON.parse(localStorage.getItem(storageKey))?JSON.parse(localStorage.getItem(storageKey)):[];
}

const toDos = createSlice({
    name: 'toDoReducer',
    initialState: {
        ToDoList: initState(),
        drawState: {
            autoFocus: true,
            canEscapeKeyClose: true,
            canOutsideClickClose: true,
            enforceFocus: true,
            hasBackdrop: true,
            isOpen: false,
            position: Position.RIGHT,
            size: undefined,
            usePortal: true,
        }
    },
    reducers: {
        add: ({ToDoList}, action) => {
            let stateItem = { text: action.payload, id: Date.now()};
            ToDoList.unshift(stateItem);
            let tmpObj = localStorage.getItem(storageKey);
            if(tmpObj === null){
                tmpObj = [];
                tmpObj.push(stateItem);
                localStorage.setItem(storageKey,JSON.stringify(tmpObj));
            }else{
                let arrObj = JSON.parse(tmpObj);
                arrObj.unshift(stateItem);
                localStorage.setItem(storageKey,JSON.stringify(arrObj));
            }
        },
        remove: ({ToDoList}, action) => {
            let arrObj = JSON.parse(localStorage.getItem(storageKey));
            arrObj = arrObj.filter(obj => obj.id !== action.payload);
            localStorage.setItem(storageKey,JSON.stringify(arrObj));

            return {ToDoList : ToDoList.filter(toDo => toDo.id !== action.payload)};
        },
        setDrawState: ({drawState},action) => {
            return {drawState: action.payload}
        }
    }
});

export const {
    add,
    remove
} = toDos.actions

export default configureStore({reducer: toDos.reducer});