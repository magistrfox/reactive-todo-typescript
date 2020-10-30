(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{11:function(e,t,n){e.exports={box:"Input_box__2OZkg",input:"Input_input__2MHt-",btn:"Input_btn__3AFNs"}},17:function(e,t,n){e.exports={header:"Header_header__2k2C7"}},18:function(e,t,n){e.exports={box:"Todos_box__z_t3l"}},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n(0),a=n.n(c),r=n(7),i=n.n(r),d=(n(24),n(4)),s=n(17),l=n.n(s),u=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h1",{className:l.a.header,children:"Reactive TODO"})})},b=n(9),j=n(11),f=n.n(j),x=n(33),p=n(10),O=Object(p.b)({name:"todos",initialState:[],reducers:{addTodo:function(e,t){var n=t.payload,o=n.id,c=n.text;e.push({id:o,text:c,completed:!1}),localStorage.setItem("todos",JSON.stringify(e))},completeTodo:function(e,t){var n=t.payload.id,o=e.find((function(e){return e.id===n}));o.completed=!o.completed,localStorage.setItem("todos",JSON.stringify(e))},editTodo:function(e,t){var n=t.payload,o=n.id,c=n.text;e.find((function(e){return e.id===o})).text=c,localStorage.setItem("todos",JSON.stringify(e))},deleteTodo:function(e,t){var n=t.payload.id;return e=e.filter((function(e){return e.id!==n})),localStorage.setItem("todos",JSON.stringify(e)),e},reorderTodo:function(e,t){var n=t.payload,o=n.before,c=n.after,a=e[o];return e[o]=e[c],e[c]=a,localStorage.setItem("todos",JSON.stringify(e)),e}}}),m=O.actions,g=m.addTodo,_=m.completeTodo,h=m.editTodo,S=m.deleteTodo,N=m.reorderTodo,v=O.reducer,k=function(){var e=Object(d.c)(),t=Object(c.useState)(""),n=Object(b.a)(t,2),a=n[0],r=n[1],i=function(t){t.preventDefault();var n={id:Object(x.a)(),text:a};e(g(n)),r("")};return Object(o.jsx)("div",{className:f.a.box,children:Object(o.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(o.jsx)("input",{onChange:function(e){return function(e){r(e.target.value)}(e)},value:a,className:f.a.input,type:"text"}),Object(o.jsx)("button",{onClick:function(e){return i(e)},className:f.a.btn,children:"Todo!"})]})})},T=n(6),y=n(18),I=n.n(y),C=n(5),J=n.n(C),R=n(8),w=function(e){var t=e.id,n=e.text,a=e.completed,r=e.index,i=Object(c.useState)(n),s=Object(b.a)(i,2),l=s[0],u=s[1],j=Object(c.useState)(!1),f=Object(b.a)(j,2),x=f[0],p=f[1],O=Object(d.c)(),m=function(){O(_({id:t}))},g=function(){p(!x)},N=function(){O(h({id:t,text:l})),p(!x)};return Object(o.jsx)(R.b,{draggableId:t,index:r,children:function(e){return Object(o.jsxs)("div",Object(T.a)(Object(T.a)(Object(T.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:J.a.box,children:[Object(o.jsx)("input",{className:J.a.checkbox,type:"checkbox",onChange:function(){return m()},checked:a}),x?Object(o.jsxs)("div",{className:J.a.inputBox,children:[Object(o.jsx)("input",{className:"".concat(J.a.text," ").concat(a?J.a.outline:""),onKeyUp:function(e){27===e.keyCode?g():13===e.keyCode&&N()},onChange:function(e){return function(e){u(e.target.value)}(e)},value:l}),Object(o.jsx)("i",{onClick:function(){return g()},className:"far fa-window-close"})]}):Object(o.jsx)("span",{onClick:function(){return m()},className:"".concat(J.a.text," ").concat(a?J.a.outline:""),children:n}),x?Object(o.jsx)("span",{onClick:function(){return N()},className:J.a.edit,children:Object(o.jsx)("i",{className:"far fa-check-square"})}):Object(o.jsx)("span",{onClick:function(){return g()},className:J.a.edit,children:Object(o.jsx)("i",{className:"fas fa-edit"})}),Object(o.jsx)("span",{onClick:function(){O(S({id:t}))},className:J.a.delete,children:Object(o.jsx)("i",{className:"far fa-minus-square"})})]}))}})},P=function(){var e=Object(d.d)((function(e){return e.todos}));Object(d.c)();return Object(o.jsx)(R.c,{droppableId:"todos-droppable",children:function(t){return Object(o.jsxs)("div",Object(T.a)(Object(T.a)({ref:t.innerRef},t.droppableProps),{},{className:I.a.box,children:[e.map((function(e,n){return Object(c.createElement)(w,Object(T.a)(Object(T.a)(Object(T.a)({innerRef:t.innerRef},t.draggableProps),t.dragHandleProps),{},{index:n,key:e.id,id:e.id,text:e.text,completed:e.completed}))})),t.placeholder]}))}})},B=function(){var e=Object(d.c)();return Object(o.jsxs)(R.a,{onDragEnd:function(t){var n=t.destination,o=t.source;t.draggableId;e(N({before:o.index,after:n.index}))},children:[Object(o.jsx)(u,{}),Object(o.jsx)(k,{}),Object(o.jsx)(P,{})]})},D=JSON.parse(localStorage.getItem("todos")),H=Object(p.a)({reducer:{todos:v},preloadedState:{todos:D||[]}});i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d.a,{store:H,children:Object(o.jsx)(B,{})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={box:"SingleTodo_box__1hnGK",checkbox:"SingleTodo_checkbox__11rrO",inputBox:"SingleTodo_inputBox__3baDJ",text:"SingleTodo_text__1eMkt",outline:"SingleTodo_outline__3AYwG",edit:"SingleTodo_edit__3jezp",delete:"SingleTodo_delete__3aa3R"}}},[[31,1,2]]]);
//# sourceMappingURL=main.52a9ee34.chunk.js.map