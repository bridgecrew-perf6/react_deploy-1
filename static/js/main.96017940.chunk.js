(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{25:function(e,t,n){},28:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(16),a=n.n(s),o=(n(28),n(9)),r=n(18),i=n(19),u=n(22),d=n(21),j=n(8),l=function(e){return{type:"ADD_TODO",payload:e}},b=function(e){return{type:"DELETE_TODO",payload:e}},h=(n(25),n(1)),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={counter:0},c}return Object(i.a)(n,[{key:"deleteTasks",value:function(e){this.props.deleteTodo(e)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"task",children:[Object(h.jsx)("input",{type:"checkbox"}),this.props.message,Object(h.jsx)("input",{className:"delete_button",type:"button",value:"X",onClick:function(){return e.deleteTasks(e.props.index)}})]})}}]),n}(c.Component),p=Object(j.b)((function(e){return{todos:e.todoList}}),(function(e){return{deleteTodo:function(t){e(b(t))}}}))(O),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={task:""},c}return Object(i.a)(n,[{key:"updateTask",value:function(e){this.setState({task:e})}},{key:"addTasks",value:function(e){this.props.addTodo(e),this.setState({task:""})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:["class component ",Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"add_task",children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter task here",value:this.state.task,onKeyPress:function(t){"Enter"===t.code&&e.addTasks(e.state.task)},onChange:function(t){return e.updateTask(t.target.value)}}),Object(h.jsx)("input",{className:"add_button",type:"button",value:"+",onClick:function(){return e.addTasks(e.state.task)}})]}),Object(h.jsx)("div",{className:"list_task",children:this.props.todos.length?this.props.todos.map((function(e,t){return Object(h.jsx)(p,{index:t,message:e},t)})):Object(h.jsx)("div",{children:" empty todo "})})]})}}]),n}(c.Component),x=Object(j.b)((function(e){return{todos:e.todoList}}),(function(e){return{addTodo:function(t){e(l(t))}}}))(v),m=n(11);var f=function(e){var t=Object(j.c)();return Object(h.jsxs)("div",{className:"task",children:[Object(h.jsx)("input",{type:"checkbox"}),e.message,Object(h.jsx)("input",{className:"delete_button",type:"button",value:"X",onClick:function(){return n=e.index,void t(b(n));var n}})]})};var k=function(e){var t=Object(c.useState)(""),n=Object(m.a)(t,2),s=n[0],a=n[1],o=Object(j.d)((function(e){return e.todoList})),r=Object(j.c)(),i=function(e){r(l(e)),a("")};return console.log(" props ",e),Object(h.jsxs)("div",{className:"App",children:["Functional component ",Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"add_task",children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter task here",value:s,onKeyPress:function(e){"Enter"===e.code&&i(s)},onChange:function(e){return t=e.target.value,void a(t);var t}}),Object(h.jsx)("input",{className:"add_button",type:"button",value:"+",onClick:function(){return i(s)}})]}),Object(h.jsx)("div",{className:"list_task",children:o.length?o.map((function(e,t){return Object(h.jsx)(f,{index:t,message:e},t)})):Object(h.jsx)("div",{children:"empty todo"})})]})},y=function(){return Object(h.jsxs)("div",{className:"Cover",children:[Object(h.jsx)(k,{}),Object(h.jsx)(x,{}),Object(h.jsx)(o.b,{to:"/home",children:"goto home"}),Object(h.jsx)(o.b,{to:"/game",children:"goto game"})]})},g=n(3);function N(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"404 NOT FOUND"})})}function T(){var e=Object(g.f)(),t=e.id,n=e.subId,c=Object(g.g)(),s=c.path,a=c.url;return console.log(" path : ",s," \n url : ",a," id : ",t,"\n subId :",n),Object(h.jsxs)("div",{children:["Welcome to home",Object(h.jsx)(o.b,{to:"/",children:"back to do"})]})}var E=n(12),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},C=n(15),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return e=[].concat(Object(C.a)(e),[t.payload]);case"DELETE_TODO":var n=Object(C.a)(e);return n.splice(t.payload,1),e=n;default:return e}},w=Object(E.combineReducers)({todoList:_,test:D}),L=n(29),S=function(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2);n[0],n[1];return Object(h.jsxs)("div",{className:"root-container",children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h1",{children:"This where header stays"})}),e.children,Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)("h1",{children:"This where footer stays"})})]})},I=(n(40),function(){var e=Object(c.useState)(["","","","","","","","",""]),t=Object(m.a)(e,2),n=t[0],s=t[1];return Object(h.jsxs)("div",{children:["Game Here",Object(h.jsx)("div",{className:"container",children:n.map((function(e,t){return Object(h.jsx)("div",{className:"element",onClick:function(){return function(e){var t=Object(C.a)(n);t[e]="X",console.log(" list ",t),s(t)}(t)},children:e},t)}))})]})}),A=Object(E.createStore)(w,Object(L.composeWithDevTools)());A.subscribe((function(){console.log(" update ")}));var R=function(){return Object(h.jsx)(o.a,{children:Object(h.jsxs)(g.c,{children:[Object(h.jsx)(g.a,{exact:!0,path:"/",component:y}),Object(h.jsx)(g.a,{exact:!0,path:"/home/",component:T}),Object(h.jsx)(g.a,{exact:!0,path:"/home/:id",component:T}),Object(h.jsx)(g.a,{exact:!0,path:"/home/:id/:subId",component:T}),Object(h.jsx)(g.a,{path:"/game",component:I}),Object(h.jsx)(g.a,{component:N})]})})};a.a.render(Object(h.jsx)(j.a,{store:A,children:Object(h.jsx)(S,{children:Object(h.jsx)(R,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.96017940.chunk.js.map