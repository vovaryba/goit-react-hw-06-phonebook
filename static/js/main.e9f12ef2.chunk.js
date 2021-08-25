(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(e,t,n){e.exports={input:"Filter_input__EGId2"}},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),s=n(3),i=n(17),u=n(36),b=n(4),l={addContact:Object(b.b)("contacts/add",(function(e){return{payload:{id:Object(u.a)(),name:e.name,number:e.number}}})),deleteContact:Object(b.b)("contacts/delete"),changeFilter:Object(b.b)("contacts/changeFilter")},j=function(e){return e.contacts.filter},d=function(e){return e.contacts.items},m=function(e){var t=d(e),n=j(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},O=n(7),f=n.n(O),h=n(1),p=function(e){var t=e.name,n=e.number,a=e.onDeleteContact;return Object(h.jsxs)("li",{className:f.a.li,children:[Object(h.jsxs)("span",{className:f.a.name,children:[t,":"]}),Object(h.jsx)("span",{className:f.a.number,children:n}),Object(h.jsx)("button",{className:f.a.button,onClick:a,children:"Delete"})]})},x=function(){var e=Object(s.c)(m),t=Object(s.b)();return Object(h.jsx)("ul",{children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(h.jsx)(p,{name:a,number:c,onDeleteContact:function(){return function(e){return t(l.deleteContact(e))}(n)}},n)}))})},_=n(16),C=n(8),v=n.n(C);var g=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(_.a)(r,2),i=o[0],u=o[1],b=Object(s.c)(d),j=Object(s.b)(),m=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}},O=function(){c(""),u("")};return Object(h.jsxs)("form",{className:v.a.form,onSubmit:function(e){e.preventDefault();var t=b.find((function(e){return e.name===n}));t?alert("".concat(t.name," is already in contacts")):(j(l.addContact({name:n,number:i})),O())},children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{value:n,onChange:m,type:"text",name:"name",className:v.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{value:i,onChange:m,type:"tel",name:"number",className:v.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})},k=n(18),y=n.n(k),F=function(){var e=Object(s.c)(j),t=Object(s.b)();return Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{value:e,onChange:function(e){return t(l.changeFilter(e.target.value))},type:"text",name:"name",className:y.a.input})]})};var N,w=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(g,{}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(F,{}),Object(h.jsx)(x,{})]})},A=n(11),z=n(19),Z=n.n(z),D=n(5),J=n(20),S=n.n(J),B=n(12),E=n(2),Q=Object(b.c)([],(N={},Object(B.a)(N,l.addContact,(function(e,t){var n=t.payload;return[].concat(Object(A.a)(e),[n])})),Object(B.a)(N,l.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),N)),q=Object(b.c)("",Object(B.a)({},l.changeFilter,(function(e,t){return t.payload}))),G=Object(E.b)({items:Q,filter:q}),I={key:"contacts",storage:S.a,blacklist:["filter"]},L=[].concat(Object(A.a)(Object(b.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[Z.a]),M=Object(b.a)({reducer:{contacts:Object(D.g)(I,G)},middleware:L,devTools:!1}),P={store:M,persistor:Object(D.h)(M)};n(33);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{store:P.store,children:Object(h.jsx)(i.a,{loading:null,persistor:P.persistor,children:Object(h.jsx)(w,{})})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={li:"Contact_li__QGv9F",name:"Contact_name__1QJlC",number:"Contact_number__2BUkd",button:"Contact_button__1xofs"}},8:function(e,t,n){e.exports={form:"Form_form__E4mZs",input:"Form_input__2iwXb",button:"Form_button__ZeQrv"}}},[[34,1,2]]]);
//# sourceMappingURL=main.e9f12ef2.chunk.js.map