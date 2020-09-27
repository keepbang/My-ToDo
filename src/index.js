import {createStore} from "redux";
import {type} from './actionType';

const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addToDo = text => {
  return {
    type: type.ADD_TODO,
    text
  };
}


const deleteToDo = id => {
  return {
    type: type.DELETE_TODO,
    id
  }
}


const reducer = (state = [], action) => {
  switch (action.type) {
    case type.ADD_TODO:
      return [{
              id : Date.now(),//javascript date
              text: action.text
            },
            ...state
      ];
    case type.DELETE_TODO:
      state.filter(toDo => console.log(toDo));
      return [...state];
    default:
      return state;
  }
}

const store = createStore(reducer);

const dispatchDeleteToDo = e => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  
  let toDos = store.getState();

  ul.innerHTML = "";

  toDos.forEach(toDo => {
    const li = document.createElement("li");
    
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.type = "button";
    btn.addEventListener("click", dispatchDeleteToDo);
    
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);


    ul.appendChild(li);
  })

  
}


store.subscribe(paintToDos);

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
}


const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

document.addEventListener("submit",onSubmit)

