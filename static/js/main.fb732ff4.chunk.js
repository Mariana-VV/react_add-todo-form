(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),r=a(3),c=a(1),s=a(6),o=a(8),d=(a(15),a(2)),l=a(10),u=a.n(l),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name},t.id)},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var h=function(e){var t,a=e.todo,n=(t=a.userId,b.find((function(e){return e.id===t})));return Object(m.jsxs)("article",{"data-id":a.id,className:u()("TodoInfo",{"TodoInfo--completed":a.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a.title}),b.includes(n)&&Object(m.jsx)(j,{user:n})]})},O=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(h,{todo:e,"data-id":e.id},e.id)}))})},f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];var p={id:Math.max.apply(Math,Object(o.a)(f.map((function(e){return e.id}))))+1,title:"",completed:!1,userId:0},x={title:!1,userId:!1},v=function(){var e=Object(d.useState)(p),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(d.useState)(f),l=Object(s.a)(i,2),u=l[0],j=l[1],h=Object(d.useState)(x),v=Object(s.a)(h,2),I=v[0],y=v[1],S=function(e,t){n((function(a){return Object(c.a)(Object(c.a)({},a),{},Object(r.a)({},e,t))})),y((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},e,!1))}))};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){var t;(e.preventDefault(),a.title.trim()||y((function(e){return Object(c.a)(Object(c.a)({},e),{},{title:!0})})),a.userId||y((function(e){return Object(c.a)(Object(c.a)({},e),{},{userId:!0})})),a.title.trim()&&a.userId)&&(t=a,j([].concat(Object(o.a)(u),[t])),y((function(e){return Object(c.a)(Object(c.a)({},e),{},{title:!1})})),y((function(e){return Object(c.a)(Object(c.a)({},e),{},{userId:!1})})),n(p))},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"",children:["Title",Object(m.jsx)("input",{value:a.title,type:"text","data-cy":"titleInput",placeholder:"Enter a todo",onChange:function(e){return S("title",e.target.value)}})]}),I.title&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{value:a.userId,"data-cy":"userSelect",onChange:function(e){return S("userId",+e.target.value)},children:[Object(m.jsx)("option",{value:"0",children:"Choose a user"}),b.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),I.userId&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(O,{todos:u})]})};i.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fb732ff4.chunk.js.map