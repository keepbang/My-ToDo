(this["webpackJsonpvanilla-redux"]=this["webpackJsonpvanilla-redux"]||[]).push([[0],{118:function(e,t,a){e.exports=a(156)},123:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},153:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=(a(123),a(33)),i=a(9),u=a(20),s=a(27),d=a(4),m=a(44),f="Keepbang.ToDo.Storage",p=Object(m.b)({name:"toDoReducer",initialState:{ToDoList:JSON.parse(localStorage.getItem(f))?JSON.parse(localStorage.getItem(f)):[],drawState:{autoFocus:!0,canEscapeKeyClose:!0,canOutsideClickClose:!0,enforceFocus:!0,hasBackdrop:!0,isOpen:!1,position:d.a.BOTTOM,size:void 0,usePortal:!0}},reducers:{add:function(e,t){var a=e.ToDoList,n={text:t.payload,id:Date.now()};a.unshift(n);var r=localStorage.getItem(f);if(null===r)(r=[]).push(n),localStorage.setItem(f,JSON.stringify(r));else{var o=JSON.parse(r);o.unshift(n),localStorage.setItem(f,JSON.stringify(o))}},remove:function(e,t){var a=JSON.parse(localStorage.getItem(f));return a=a.filter((function(e){return e.id!==t.payload})),localStorage.setItem(f,JSON.stringify(a)),Object(s.a)(Object(s.a)({},e),{},{ToDoList:e.ToDoList.filter((function(e){return e.id!==t.payload}))})},setDraw:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{drawState:Object(s.a)(Object(s.a)({},e.drawState),t.payload)})}}}),v=p.actions,D=v.add,O=v.remove,b=v.setDraw,E=Object(m.a)({reducer:p.reducer});var g=Object(u.b)(null,(function(e,t){return{onDeleteBtn:function(){return e(O(t.id))}}}))((function(e){var t=e.text,a=e.id,n=e.onDeleteBtn;return r.a.createElement("li",{id:a},r.a.createElement(l.b,{to:"/".concat(a)},t),r.a.createElement("button",{onClick:n},"DEL"))})),S=(a(129),a(130),function(e){var t=e.eventProps;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"add_btn",onClick:t},"+"))}),h=a(60);var j=Object(u.b)(null,(function(e){return{addToDo:function(t){return e(D(t))}}}))((function(e){var t=e.addToDo,a=e.closeFunc,o=Object(n.useState)(""),c=Object(h.a)(o,2),l=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===l?alert("\uc544\ubb34\uac83\ub3c4 \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."):(t(l),i(""),a())}},r.a.createElement("input",{className:"input__box",onChange:function(e){i(e.target.value)},type:"text",placeholder:"Write ToDo..."}),r.a.createElement("button",{className:"input__btn"},"ADD")))})),T=a(159),w=a(1);var N=Object(u.b)((function(e){return{toDos:e.ToDoList,drawState:e.drawState}}),(function(e){return{setDrawState:function(t){return e(b(t))}}}))((function(e){var t=e.toDos,a=e.drawState,n=(e.addToDo,e.setDrawState),o=function(){n({isOpen:!1})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"home_title"},"ToDo"),r.a.createElement(T.a,Object.assign({icon:"edit",onClose:o,title:"Add ToDo"},a),r.a.createElement("div",{className:w.a.DRAWER_BODY},r.a.createElement("div",{className:w.a.DIALOG_BODY},r.a.createElement(j,{closeFunc:o})))),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))),r.a.createElement(S,{eventProps:function(){n({isOpen:!0})}}))}));var y=Object(u.b)((function(e,t){var a=t.match.params.id;return{toDo:e.find((function(e){return e.id===parseInt(a)}))}}))((function(e){var t=e.toDo;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,null===t||void 0===t?void 0:t.text),r.a.createElement("h2",null,"Create at : ",null===t||void 0===t?void 0:t.id))}));var I=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:N}),r.a.createElement(i.a,{path:"/:id",component:y}))};a(153),a(154),a(155);c.a.render(r.a.createElement(u.a,{store:E},r.a.createElement(I,null)),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.29d26403.chunk.js.map