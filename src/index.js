import {createStore} from 'redux';
import {type as COUNT_TYPE} from './countAction';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0,action) => {
  switch (action.type){
    case COUNT_TYPE.ADD:
      return count + 1;
    case COUNT_TYPE.MINUS:
      return count - 1;
    default:
      return count
  }
};

const countStore = createStore(countModifier);

const onChange = (v) => {
  number.innerHTML = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type:COUNT_TYPE.ADD});
}

const handleMinus = () => {
  countStore.dispatch({type:COUNT_TYPE.MINUS});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);