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
            position: Position.BOTTOM,
            size: undefined,
            usePortal: true,
        }
    },
    reducers: {
        add: ({ToDoList}, {payload}) => {
            let stateItem = {title: payload.title, text: payload.text, id: Date.now()};
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
        update: (state, {payload}) => {
            console.log(payload);
            let stateItem = {title: payload.title, text: payload.text, id: payload.id};
            let updateToDo = state.ToDoList.map(toDo => (toDo.id === stateItem.id?stateItem:toDo));
            localStorage.setItem(storageKey,JSON.stringify(updateToDo));
            return {...state,ToDoList : updateToDo}
        },
        remove: (state, action) => {
            let arrObj = JSON.parse(localStorage.getItem(storageKey));
            arrObj = arrObj.filter(obj => obj.id !== action.payload);
            localStorage.setItem(storageKey,JSON.stringify(arrObj));

            return {...state,ToDoList : state.ToDoList.filter(toDo => toDo.id !== action.payload)};
        },
        setDraw: (state,action) => {
            return {...state,drawState: {...state.drawState,...action.payload}}
        }
    }
});

export const {
    add,
    update,
    remove,
    setDraw
} = toDos.actions

export default configureStore({reducer: toDos.reducer});